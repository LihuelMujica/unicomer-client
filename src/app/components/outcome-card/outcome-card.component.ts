import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outcome-card',
  templateUrl: './outcome-card.component.html',
  styleUrls: ['./outcome-card.component.css']
})
export class OutcomeCardComponent {
  @Input() outcome: number = 0;
}
