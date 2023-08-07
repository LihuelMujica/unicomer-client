import { Component, Input } from '@angular/core';

import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.css']
})
export class LastTransactionsComponent {
  @Input() transactions: Transaction[] = [
    {
      id: 1,
      operationType: 'TRANSFER',
      receiverId: 1,
      receiver: {
        id: 1,
        name: 'Juan'
      },
      senderId: 2,
      sender: {
        id: 2,
        name: 'PEDRO ROBLEDO CARLOS'
      },
      amount: 100000,
      operationState: 'SUCCESS',
      date: '2021-08-01',
      time: '10:00'
    },
    {
      id: 1,
      operationType: 'TRANSFER',
      receiverId: 1,
      receiver: {
        id: 1,
        name: 'Juan'
      },
      senderId: 2,
      sender: {
        id: 2,
        name: 'Pedro'
      },
      amount: 1000,
      operationState: 'SUCCESS',
      date: '2021-08-01',
      time: '10:00'
    },
    {
      id: 1,
      operationType: 'TRANSFER',
      receiverId: 1,
      receiver: {
        id: 1,
        name: 'Juan'
      },
      senderId: 2,
      sender: {
        id: 2,
        name: 'Pedro'
      },
      amount: 1000,
      operationState: 'SUCCESS',
      date: '2021-08-01',
      time: '10:00'
    },
    {
      id: 1,
      operationType: 'TRANSFER',
      receiverId: 1,
      receiver: {
        id: 1,
        name: 'Juan'
      },
      senderId: 2,
      sender: {
        id: 2,
        name: 'Pedro'
      },
      amount: 1000,
      operationState: 'SUCCESS',
      date: '2021-08-01',
      time: '10:00'
    },
    {
      id: 1,
      operationType: 'TRANSFER',
      receiverId: 1,
      receiver: {
        id: 1,
        name: 'Juan'
      },
      senderId: 2,
      sender: {
        id: 2,
        name: 'Pedro'
      },
      amount: 1000,
      operationState: 'SUCCESS',
      date: '2021-08-01',
      time: '10:00'
    }
  ];
  @Input() loggedUserId: number = 1;

  getTransactionTarget(loggedUserId: number, transaction: Transaction): string {
    if (loggedUserId === transaction.senderId) {
      return transaction.receiver.name;
    } else {
      return transaction.sender.name;
    }
  }

  getTransactionIcon(loggedUserId: number, transaction: Transaction): string {
    if (loggedUserId === transaction.senderId) {
      return 'arrow_upward';
    } else {
      return 'arrow_downward';
    }
  }

  getTransactionColor(transaction: Transaction): string {
    if (transaction.operationState === 'SUCCESS') {
      return 'green';
    }
    if (transaction.operationState === 'FAILED') {
      return 'red';
    }
    return 'grey';
  }

  getTransactionStatus(transaction: Transaction): string {
    if (transaction.operationState === 'SUCCESS') {
      return 'Completada';
    }
    if (transaction.operationState === 'FAILED') {
      return 'Fallida';
    }
    return 'Pendiente';
  }

}
