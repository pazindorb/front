import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from './model/note';
import { NoteResponse } from './model/note.response';
import { NoteService } from './service/note.service';
import {NoteDetailsComponent} from "./note-details/note.details.component";
import {SearchMode} from "./enums/search-mode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchMode: SearchMode | undefined;
  increasingSearch: boolean = false;

  searchTypes = SearchMode;
  notes: Note[] = [];

  constructor(private noteService: NoteService){}

  @ViewChild('noteDetails') noteDetails: NoteDetailsComponent | undefined;

  ngOnInit(){
    this.getNotes();
  }

  public getNotes() : void {
    this.noteService.getNotes().subscribe(
      (response: NoteResponse[]) => {
         response.forEach((element) => {
            this.notes.push(
              this.convertToNote(element)
            )
           }
         )
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private convertToNote(element: NoteResponse) {
    return new Note(
      element.title,
      element.content,
      new Date(element.created),
      new Date(element.modified)
    );
  }

  public showContentModal(note: Note): void{
    this.noteDetails?.showContentModal(note);
  }

  public sortBy(searchMode: SearchMode){
    if(this.searchMode === searchMode){
      this.notes.reverse();
      this.increasingSearch = !this.increasingSearch;
    } else {
      this.searchMode = searchMode;
      this.increasingSearch = true;

      switch (searchMode){
        case SearchMode.TITLE:
          this.notes.sort(function(a, b){return ('' + a.title).localeCompare(b.title);})
          break;
        case SearchMode.CREATED:
          this.notes.sort(((a,b)=>a.created.getTime()-b.created.getTime()));
          break;
        case SearchMode.MODIFIED:
          this.notes.sort(((a,b)=>a.modified.getTime()-b.modified.getTime()));
          break;
      }
    }
  }
}

