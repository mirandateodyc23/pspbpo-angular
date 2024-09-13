import { Component, computed, DestroyRef, inject, Input, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  userId = input.required<string>(); // using signal
  // @Input({required: true}) userId!: string;
  userName = '';
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute); // using activatedRoute -> paramMam observable value
  private destroyRef = inject(DestroyRef);


  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  // get userName() { // using getter
  //   return this.usersService.users.find((u) => u.id === this.userId)?.name;
  // }

  // userName?: string;
  // @Input()
  // set userId(uid: string) { // using setter
  //   this.userName = this.usersService.users.find((u) => u.id === uid)?.name;
  // }
  
  ngOnInit() {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }


  
}
