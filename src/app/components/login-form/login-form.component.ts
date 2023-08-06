import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface User {
  tipoDocumento: string;
  numeroDocumento: string;
  clave: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: User = {
    tipoDocumento: '',
    numeroDocumento: '',
    clave: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica para enviar la información del formulario a tu servidor o realizar las acciones necesarias para el login.
    try {
      this.authService.login(this.user.tipoDocumento, this.user.numeroDocumento, this.user.clave).subscribe({
        next: (data) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert(error)
        }
      }
      )
    }
    catch (error) {
      alert(error)
    }
  }

}
