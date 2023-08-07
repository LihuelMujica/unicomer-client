import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.css']
})
export class IncomeCardComponent {

  @Input() income: number = 0;

}
