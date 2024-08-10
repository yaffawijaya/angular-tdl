// Notes:
// `Input` with an uppercase is decorator
// `Input` with a lowercase is a type of function
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

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

  // @Input({ 'required': true }) id!: string;
  // @Input({ 'required': true }) avatar!: string;
  // @Input({ 'required': true }) name!: string;
  @Input({ 'required': true }) user!: User;
  @Input({ 'required': true }) selected!: boolean;
  @Output() select = new EventEmitter();

  // INPUT SIGNAL
  // avatar = input.required<string>();
  // name = input.required<string>();

  // COMPUTED SIGNAL
  // imagePath = computed(() => "../assets/users/" + this.avatar());

  get imagePath() {
    return "../assets/users/" + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('Clicked on user', this.selectedUser);
    this.select.emit(this.user.id);
  }
}
