import { Data } from "@angular/router";

export interface NoteResponse{
    title : string;
    content : string;
    created : Date;
    modified : Date;
}