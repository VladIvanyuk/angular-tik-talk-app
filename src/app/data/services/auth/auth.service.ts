import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ILogin } from './types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  cookie = inject(CookieService);
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth';

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookie.get('token');
    }
    return !!this.token;
  }

  login(payload: ILogin) {
    const FD = new FormData();

    FD.append('username', payload.username as string);
    FD.append('password', payload.password as string);
    return this.http.post(`${this.baseApiUrl}/token`, FD).pipe(
      tap((val: any) => {
        this.token = val.access_token;
        this.refreshToken = val.refresh_token;

        this.cookie.set('token', val.access_token);
        this.cookie.set('refresh_token', val.refresh_token);
      }),
    );
  }
}
