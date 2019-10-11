import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { taskItem } from 'src/app/models/task-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  task:Task;
  itemName = '';

  constructor(private taskService:TasksService,
              private route:ActivatedRoute ) {

    const taskId = this.route.snapshot.paramMap.get('taskId')

    this.task = this.taskService.getTask(taskId);
    
   }

  ngOnInit() {
  }

  addItem(){

    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new taskItem(this.itemName);
    this.task.items.push(newItem);

    this.itemName = '';
    this.taskService.saveStorage();

  };

  check(item:taskItem){

    
    const thingsToDo = this.task.items.filter(itemData => !itemData.done).length;

    if (thingsToDo === 0) {
      this.task.finishedOn = new Date();
      this.task.done = true;
    }else{
      this.task.finishedOn = null;
      this.task.done = false;
    }; 

    this.taskService.saveStorage(); 

    console.log(this.taskService.tasks);
    
  }

  delete(i:number){

    this.task.items.splice(i, 1);
    
    this.taskService.saveStorage();
  }
}
 