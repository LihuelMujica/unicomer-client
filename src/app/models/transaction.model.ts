// private Integer id;
// private OperationType operationType;
// private Integer receiverId;
// private PublicUserDTO receiver;
// private Integer senderId;
// private PublicUserDTO sender;
// private BigDecimal amount;
// private OperationState operationState;
// private LocalDate date;
// private LocalTime time;

export interface Transaction {
    id: number;
    //DEPOSIT, WITHDRAW, TRANSFER
    operationType: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER';
    receiverId: number;
    receiver: PublicUser;
    senderId: number;
    sender: PublicUser;
    amount: number;
    //SUCCESS, FAILED, PENDING
    operationState: 'SUCCESS' | 'FAILED' | 'PENDING';
    date: string;
    time: string;
}

export interface PublicUser {
    id: number;
    name: string;
}
