import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TokenService } from './token.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  login(dniType: string, dni: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { dniType, dni, password }).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err)
      }),
      tap(response => this.tokenService.saveToken(response.jwt))
    )
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

  private handleErrors(error: HttpErrorResponse): Observable<never> {
    if (error.status == HttpStatusCode.Unauthorized)
    throw new Error('Usuario o contraseña incorrectos.');
    if (error.status == HttpStatusCode.Forbidden)
    throw new Error('No tiene permisos para realizar la solicitud.');
    if (error.status == HttpStatusCode.NotFound)
    throw new Error('El producto no existe.');
    if (error.status == HttpStatusCode.InternalServerError)
    throw new Error('Error en el servidor.');
    throw new Error('Un error inesperado ha ocurrido.');
  }
}
