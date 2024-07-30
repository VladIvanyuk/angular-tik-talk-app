import { IProfile } from './../../interfaces/profile.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course';

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }

  getMyProfile() {
    return this.http.get<IProfile>(`${this.baseApiUrl}/account/me`);
  }
}
