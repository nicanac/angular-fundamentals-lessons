import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <p>
      {{ user.id }} {{ user.email
      }}<a href="#" (click)="this.onUserAdd(user)">Add to save list</a> +
      <a href="#" (click)="this.onUserRemoved(user)">Remove from save list</a>
    </p>
    <!-- add more properties to customize -->
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input({
    required: true,
  })
  user!: User;
  @Output() userRemoved = new EventEmitter<User>();
  @Output() userAdded = new EventEmitter<User>();

  onUserAdd(user: User) {
    this.userAdded.emit(user);
  }
  onUserRemoved(user: User) {
    this.userRemoved.emit(user);
  }
}
