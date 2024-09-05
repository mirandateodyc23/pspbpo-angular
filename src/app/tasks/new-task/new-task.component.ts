import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // private tasksService: TasksService;

  constructor(private tService: TasksService) {
    // this.tasksService = new TasksService();
    // this.tasksService = tService;
  }

  onAddTask(title: string, description: string) {
    // this.tasksService.addTask({title: title, description: description});
    this.tService.addTask({title, description});
    this.formEl()?.nativeElement.reset();
  }
}