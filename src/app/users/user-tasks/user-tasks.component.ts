import { Component, computed, inject, Input, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>(); // using signal
  // @Input({required: true}) userId!: string;

  private usersService = inject(UsersService);

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );

  // get userName() { // using getter
  //   return this.usersService.users.find((u) => u.id === this.userId)?.name;
  // }

  // userName?: string;
  // @Input()
  // set userId(uid: string) { // using setter
  //   this.userName = this.usersService.users.find((u) => u.id === uid)?.name;
  // }
  


  
}
