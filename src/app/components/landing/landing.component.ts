import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../../shared/generic-list/generic-list.component';
import { ListUsersService } from '../../services/list-users.service';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GenericListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

public list: Users[];

constructor(private userService: ListUsersService) {
  this.list = [
    {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    }
  ];
  
  this.getUsers();
}

getUsers(): void {
  this.userService.getListUsers().subscribe(response => {
    this.list = response;
  });
}
}
