import { Component, OnInit } from '@angular/core';3

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  user: User = {
    id: 1,
    name: 'John',
    lastname: 'Doe',
    dniType: 'DNI',
    dni: '12345678',
    email: '',
    role: 'USER',
    balance: 0,
    last30DaysIncome: 0,
    last30DaysOutcome: 0
  };

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getProfile().subscribe((user) => {
      this.user = user;
    });
  }

}
