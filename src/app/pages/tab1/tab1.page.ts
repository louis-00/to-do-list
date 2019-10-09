import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public taskService:TasksService,
              private router:Router,
              private alertCtrl:AlertController
  ) {

  }
 
  async addTask(){
   
    // this.router.navigateByUrl('/tabs/tab1/add') 
    
    const alert = await this.alertCtrl.create({
        header: 'New task',
        inputs:[
          {
            name:'title',
            type:'text',
            placeholder:'Task title'
          }
        ],
        buttons: [
          {
            text:'Create',
            handler:(data)=>{
               console.log(data);
               if (data.title.length === 0) {
                 return;
               }
               this.taskService.createTask(data.title)
            }
           },
          {
            text:'Cancel',
            role:'cancel',
            handler: ()=>{
              console.log('cancelar');
            }
          }
        ]
      });
  
      alert.present();
  }
  
}
