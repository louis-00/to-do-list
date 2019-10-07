import { taskItem } from './task-item.model';

export class Task {

    id:number;
    title:string;
    createdOn:Date;
    finishedOn:Date;
    done:boolean;
    items:taskItem[]

    constructor(title:string){
        
        this.title= title;
        this.createdOn=new Date();
        this.done=false;
        this.items=[];
        this.id=new Date().getTime();
    }

}