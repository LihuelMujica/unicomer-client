import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

import { BalanceService } from 'src/app/services/balance.service';
import { Balance } from 'src/app/models/balance.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {
  @Input() user: User = {
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

  thisWeek: Balance[] = [];
  lastWeek: Balance[] = [];

  constructor(private userService: UsersService, private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.balanceService.getBalance().subscribe((data) => {
      this.thisWeek = data.thisWeek;
      this.lastWeek = data.lastWeek;
    });
  }

}
