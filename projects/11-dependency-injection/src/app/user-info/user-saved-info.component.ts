import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-saved-info',
  standalone: true,
  template: `
    <p>{{ user.id }} {{ user.email }}</p>
    <!-- add more properties to customize -->
  `,
  styles: ``,
})
export class UserSavedInfoComponent {
  @Input({
    required: true,
  })
  user!: User;
}
