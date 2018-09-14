export class EntityBase {
     id: string;
     modified_Date: string;
     created_Date: string;
     deleted_Date: string;
     note: string;

     constructor() {
        this.id = ' ';
        this.modified_Date = ' ';
        this.created_Date = ' ';
        this.deleted_Date = ' ';
        this.note = ' ';
     }
}