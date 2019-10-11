import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from "../../services/tasks.service";
import { Router } from "@angular/router";
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() completed = true;

  constructor(public taskService:TasksService,
              private router:Router
  ) { }

  ngOnInit() {}

  selectedTask(task:Task){

    if (this.completed) {
      this.router.navigateByUrl(`/tabs/tab2/add/${task.id}`)
    }else{
      this.router.navigateByUrl(`/tabs/tab1/add/${task.id}`)

    }

    console.log(task);
    
  };

  deleteTask(task:Task){

    this.taskService.deleteTask(task);

  };

}
