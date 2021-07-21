import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Note } from './model/note';
import { NoteResponse } from './model/note.response';
import { NoteService } from './service/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  public notes: Note[] = [];
  public actualNote: Note | undefined;

  constructor(private noteService: NoteService){}

  ngOnInit(){
    this.getNotes();
    this.sortTableByTitle();
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
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#ContentModal');

    this.actualNote = note;

    container?.appendChild(button);
    button.click();
  }

  public sortTableByTitle(): void {
    this.notes.sort(function(a, b){
      return ('' + a.title).localeCompare(b.title);
    })
  }
}
