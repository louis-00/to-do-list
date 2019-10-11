import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TasksService } from "../../services/tasks.service";
import { Router } from "@angular/router";
import { Task } from 'src/app/models/task.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild( IonList, {static: false}) task: IonList;

  @Input() completed = true;

  constructor(public taskService:TasksService,
              private router:Router,
              private alertCtrl:AlertController
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

  async editTask(task:Task){
       
      const alert = await this.alertCtrl.create({
          header: 'Edit task',
          inputs:[
            {
              name:'title',
              type:'text',
              value:`${task.title}`,
              placeholder:'Task title'
            }
          ],
          buttons: [
            {
              text:'Edit',
              handler:(data)=>{
                 console.log(data);
                 if (data.title.length === 0) {
                   return;
                 }  

                 task.title = data.title;
                 
                this.taskService.saveStorage();
                this.task.closeSlidingItems();
              }
             },
            {
              text:'Cancel',
              role:'cancel',
              handler: ()=>{
                console.log('cancelar');
                this.task.closeSlidingItems();

              }
            }
          ]
        });
    
        alert.present();
    };
  

}
