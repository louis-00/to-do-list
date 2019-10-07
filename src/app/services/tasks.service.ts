import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[]=[]

  constructor() { 

    console.log('servicio inicializado');
    
  }

}
