import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[]=[]

  constructor() { 

    this.loadStorage();
    
  };

  createTask(title:string){

    const newTask = new Task(title);
    this.tasks.push(newTask);
    this.saveStorage();
    return newTask.id;
  };

  deleteTask(task:Task){
    
    this.tasks = this.tasks.filter(taskData => taskData.id !== task.id)
    this.saveStorage();
  };

  getTask(id:string|number){
    id = Number(id);
    return this.tasks.find( taskData => taskData.id === id);
  };

  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.tasks));
  };

  loadStorage(){

    if (localStorage.getItem('data')) {
      this.tasks = JSON.parse(localStorage.getItem('data'));
    }else{
      this.tasks = [];
    }
  };
}
