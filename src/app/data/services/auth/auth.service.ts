import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IAuthResponse, ILogin } from './types';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  cookie = inject(CookieService);
  router = inject(Router);
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth';

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookie.get('token');
      this.refreshToken = this.cookie.get('refresh_token');
    }
    return !!this.token;
  }

  login(payload: ILogin) {
    const FD = new FormData();

    FD.append('username', payload.username as string);
    FD.append('password', payload.password as string);

    return this.http.post<IAuthResponse>(`${this.baseApiUrl}/token`, FD).pipe(
      tap((val) => this.saveTokens(val)),
    );
  }
  refreshAuthToken() {
    return this.http.post<IAuthResponse>(`${this.baseApiUrl}/refresh`, {
      refresh_token: this.refreshToken
    }).pipe(
      tap((val) => this.saveTokens(val)),
      catchError((err) => {

        this.logout();

        return throwError(err);
      })
    );
  }

  logout() {
    this.cookie.deleteAll();
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['login']);
  }

  saveTokens(res: IAuthResponse) {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookie.set('token', this.token);
    this.cookie.set('refresh_token', this.refreshToken);
  }
}
