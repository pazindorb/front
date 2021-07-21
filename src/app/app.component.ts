import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from './model/note';
import { NoteResponse } from './model/note.response';
import { NoteService } from './service/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public notes: Note[] = [];
  public actualNote: Note | undefined;
  @ViewChild('toggler') toggler :ElementRef | undefined;
  private alfabetical: boolean = false;
  private created: boolean = false;
  private modified: boolean = false;

  constructor(private noteService: NoteService){}

  ngOnInit(){
    this.getNotes();
  }

  public getNotes() : void {
    this.noteService.getNotes().subscribe(
      (response: NoteResponse[]) => {
         response.forEach((element) => {
            this.notes.push(
              new Note(
                element.title,
                element.content,
                new Date (element.created),
                new Date (element.modified)
              )
            )
           }
         )
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public showContentModal(note: Note): void{
    this.actualNote = note;
    this.toggler?.nativeElement.click();
  }

  public sortTableByTitle(): void {
    if(this.alfabetical === false){
      this.modified = false;
      this.created = false;
      this.alfabetical = true;
      this.notes.sort(function(a, b){return ('' + a.title).localeCompare(b.title);})
    }
    else{
      this.notes.reverse();
    }
  }
  public sortTableByCreated(): void {
    if(this.created === false){
      this.modified = false;
      this.created = true;
      this.alfabetical = false;
      this.notes.sort(((a,b)=>a.created.getTime()-b.created.getTime()));
    }
    else{
      this.notes.reverse();
    }
  }
  public sortTableByModified(): void {
    if(this.modified === false){
      this.modified = true;
      this.created = false;
      this.alfabetical = false;
      this.notes.sort(((a,b)=>a.modified.getTime()-b.modified.getTime()));
    }
    else{
      this.notes.reverse();
    }
  }


}
