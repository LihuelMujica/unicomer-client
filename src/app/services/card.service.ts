import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  getMyCard() {
    return this.http.get<Card>(`${this.apiUrl}/card/myCard`);
  }
}
