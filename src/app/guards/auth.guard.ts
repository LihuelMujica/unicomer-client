import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  if (!token) {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
  return true;
};
