import { Component, Input } from '@angular/core';

import { OptionMenu } from 'src/app/models/option-menu.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  @Input() optionsMenu: OptionMenu[] = [
    {
      id: 1,
      name: 'Análisis',
      icon: 'fas fa-chart-line',
      url: '/analysis'
    },
    {
      id: 2,
      name: 'Finanzas',
      icon: 'fas fa-wallet',
      url: '/finance'
    },
    {
      id: 3,
      name: 'Configuración',
      icon: 'fas fa-cog',
      url: '/settings'
    },
    {
      id: 4,
      name: 'Ayuda',
      icon: 'fas fa-question-circle',
      url: '/help'
    },
    {
      id: 5,
      name: 'Acerca de',
      icon: 'fas fa-info-circle',
      url: '/about'
    },
    {
      id: 6,
      name: 'Contacto',
      icon: 'fas fa-envelope',
      url: '/contact'
    },
    {
      id: 7,
      name: 'Soporte',
      icon: 'fas fa-headset',
      url: '/support'
    }
  ];
}
