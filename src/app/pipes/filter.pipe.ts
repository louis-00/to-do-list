import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], completed: boolean = true): Task[] {

    return tasks.filter(list => list.done === completed);
    
  }

}
