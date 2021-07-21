
export class Note{
    title: string;
    content: string;
    created: Date;
    modified: Date;

    constructor(title:string, content:string, created:Date, modified:Date ){
        this.title = title;
        this.content = content;
        this.modified = modified;
        this.created = created;
    }

    public getCreated() : string {
        return this.getFromDate(this.created)
    }

    public getModified() : string {
        return this.getFromDate(this.modified);
    }

    private getFromDate(date:Date) : string {
        let ret =
        date.getDate() + "-" +
        date.getMonth() + "-" +
        date.getFullYear() + "  " + 
        date.getHours() + ":" +
        date.getMinutes();
        return ret;
    }
}