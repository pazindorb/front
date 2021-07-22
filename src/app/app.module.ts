import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NoteDetailsComponent} from "./note-details/note.details.component";
import {SortIndicatorComponent} from "./sort-indicator/sort-indicator.component";

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    SortIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
