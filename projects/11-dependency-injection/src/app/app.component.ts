import { User } from './interface/user';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserSavedInfoComponent } from './user-info/user-saved-info.component';
import { UserService } from './user.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent, UserSavedInfoComponent],
  template: `
    <h1>User Listing</h1>
    @for(user of userData; track user.id) {
    <app-user-info
      [user]="user"
      (userAdded)="addUserToSavedList($event)"
      (userRemoved)="removeUserFromSavedList($event)"
    ></app-user-info>
    }
    <h1>User Saved</h1>
    @for(user of userSaved; track user.id) {
    <app-user-saved-info [user]="user"></app-user-saved-info>
    }
  `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];
  userSaved: User[] = [];
  async ngOnInit(): Promise<void> {
    const data = await this.userService.getUserData();
    this.userData = data;
  }
  constructor() {}
  addUserToSavedList(user: User) {
    this.userSaved.push(user);
  }
  removeUserFromSavedList(user: User) {
    // Remove the user from the saved list
    const index = this.userSaved.indexOf(user);
    console.log(index);
    this.userSaved.splice(index, 1);
    if (index < 0) {
      alert('User NOT found in saved list');
    }
  }
}
