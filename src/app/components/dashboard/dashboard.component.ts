import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
