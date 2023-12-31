import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<Transaction[]>(`${this.apiUrl}/user/myTransactions`);
  }
}
