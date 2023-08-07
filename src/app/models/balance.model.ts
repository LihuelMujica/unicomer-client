export interface Balance {
    id: number;
    balance: number;
    date: string;
    userId: number;
}

export interface BalanceResponse {
    thisWeek: Balance[];
    lastWeek: Balance[];
}
