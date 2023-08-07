import { Component, Input } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // id: number;
  // dniType: string;
  // dni: string;
  // name: string;
  // lastname: string;
  // email: string;
  // role: string;
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
}
