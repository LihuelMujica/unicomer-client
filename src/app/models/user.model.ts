
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
}

// {
//   "dniType": "DNI",
//   "dni": "string",
//   "name": "string",
//   "lastname": "string",
//   "email": "string",
//   "password": "string"
// }

export interface CreateUserDTO extends Omit<User, 'id' | 'role'> {
  password: string;
}
