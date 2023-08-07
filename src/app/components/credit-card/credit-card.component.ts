import { Component, Input, OnInit } from '@angular/core';

import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() card: Card = {
    id: 0,
    cardHolderName: 'John Doe',
    last4Digits: '1234',
    cardExpirationDate: '01/40'
  };
  @Input() balance: number = 4000.00;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getMyCard().subscribe((card) => {
      this.card = card;
      console.log(card);
    });
  }
}
