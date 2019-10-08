import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[]=[]

  constructor() { 

    const lista1 = new Task('Tocar piano')
    const lista2 = new Task('Leer 5 libros')
    
    this.tasks.push(lista1, lista2)
    
  }

}
