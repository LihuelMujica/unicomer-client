import { Component, Input } from '@angular/core';

import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
  @Input() card: Card = {
    id: 0,
    cardHolderName: 'John Doe',
    last4Digits: '1234',
    cardExpirationDate: '01/40'
  };
  @Input() balance: number = 4000.00;
}
