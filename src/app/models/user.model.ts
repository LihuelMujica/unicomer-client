
// "user": {
//   "id": 0,
//   "dniType": "DNI",
//   "dni": "string",
//   "name": "string",
//   "lastname": "string",
//   "email": "string",
//   "role": "ADMIN"
// }
export interface User {
  id: number;
  dniType: string;
  dni: string;
  name: string;
  lastname: string;
  email: string;
  role: string;
  balance: number;
  last30DaysIncome: number;
  last30DaysOutcome: number;
}

// {
//   "dniType": "DNI",
//   "dni": "string",
//   "name": "string",
//   "lastname": "string",
//   "email": "string",
//   "password": "string"
// }

export interface CreateUserDTO extends Omit<User, 'id' | 'role' | 'balance' | 'last30DaysIncome' | 'last30DaysOutcome'> {
  password: string;
}
