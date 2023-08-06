import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


interface User {
  tipoDocumento: string;
  numeroDocumento: string;
  clave: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  correoElectronico: string;
  confirmarCorreo: string;
  confirmarClave: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  user: User = {
    tipoDocumento: '',
    numeroDocumento: '',
    clave: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    correoElectronico: '',
    confirmarCorreo: '',
    confirmarClave: '',
  };

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
    ) {}

  register() {
    this.usersService.create({
      dniType: this.user.tipoDocumento,
      dni: this.user.numeroDocumento,
      name: this.user.nombre,
      lastname: this.user.apellido,
      email: this.user.correoElectronico,
      password: this.user.clave
    }).subscribe((user) => {
      this.authService.login(this.user.tipoDocumento, this.user.numeroDocumento, this.user.clave).subscribe({
        next: (data) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert(error)
        }
    });
  });}
}
