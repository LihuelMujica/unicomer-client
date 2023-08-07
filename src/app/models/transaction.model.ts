export interface Transaction {
    id: number;
    operationType: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER';
    receiverId: number;
    receiver: PublicUser;
    senderId: number;
    sender: PublicUser;
    amount: number;
    operationState: 'SUCCESS' | 'FAILED' | 'PENDING';
    date: string;
    time: string;
}

export interface PublicUser {
    id: number;
    name: string;
}
