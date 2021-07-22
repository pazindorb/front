import { HttpErrorResponse } from '@angular/common/http';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../model/note";


@Component({
  selector: 'note-details',
  templateUrl: './note.details.component.html',
  styleUrls: ['./note.details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note: Note | undefined;
  @ViewChild('toggler') toggler :ElementRef | undefined;

  constructor(){}

  ngOnInit(){
  }

  public showContentModal(note: Note): void{
    this.note = note;
    this.toggler?.nativeElement.click();
  }
}
