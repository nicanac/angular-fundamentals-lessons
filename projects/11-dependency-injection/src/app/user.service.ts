import { Injectable } from '@angular/core';
import { data, User } from './data';

// Make the UserService available to the entire application
@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
