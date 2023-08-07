import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Balance, BalanceResponse } from '../models/balance.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  getBalance() {
    return this.http.get<BalanceResponse>(`${this.apiUrl}/user/myBalance`);
  }
}
