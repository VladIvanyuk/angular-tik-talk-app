import { IProfile } from './../../interfaces/profile.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IPageable } from '../../interfaces/pageable.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course';
  me = signal<IProfile | null>(null);

  getTestAccounts() {
    return this.http.get<IProfile[]>(
      `${this.baseApiUrl}/account/test_accounts`
    );
  }

  getMyProfile() {
    return this.http
      .get<IProfile>(`${this.baseApiUrl}/account/me`)
      .pipe(tap((res) => this.me.set(res)));
  }

  getSubscribers() {
    return this.http
      .get<IPageable<IProfile>>(`${this.baseApiUrl}/account/subscribers/`)
      .pipe(map((res) => res.items));
  }
}
