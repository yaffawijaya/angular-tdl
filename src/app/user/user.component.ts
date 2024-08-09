// Notes:
// `Input` with an uppercase is decorator
// `Input` with a lowercase is a type of function
import { Component, computed, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => "../assets/users/" + this.selectedUser().avatar);

  // get imagePath() {
  //   return "../assets/users/" + this.selectedUser.avatar;
  // }

  // @Input({ 'required': true }) avatar!: string;
  // @Input({ 'required': true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => "../assets/users/" + this.avatar());

  // get imagePath() {
  //   return "../assets/users/" + this.avatar;
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('Clicked on user', this.selectedUser);
  }
}
