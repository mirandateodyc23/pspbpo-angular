import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, TaskStatusOptionsProvider } from '../task.model';
// import { TASK_STATUS_OPTIONS, TaskStatusOptions } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [TaskStatusOptionsProvider]
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  // tasks = this.tasksService.allTask;
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.tasksService.allTask();
      case 'open':
        return this.tasksService
          .allTask()
          .filter((task) => task.status == 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTask()
          .filter((task) => task.status == 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTask()
          .filter((task) => task.status == 'DONE');
      default:
        return this.tasksService.allTask();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
