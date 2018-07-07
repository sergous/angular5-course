import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(delay(1000), tap(val => (this.isLoggedIn = true)));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}