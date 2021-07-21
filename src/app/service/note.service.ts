import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { NoteResponse } from "../model/note.response";

@Injectable({providedIn: 'root'})
export class NoteService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getNotes(): Observable<NoteResponse[]>{
        return this.http.get<NoteResponse[]>(`${this.apiServerUrl}/api/notes`);
    }

}