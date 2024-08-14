import { ProfileService } from './../../data/services/profile/profile.service';
import { Component, inject, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from '../subscriber-card/subscriber-card.component';
import { IProfile } from '../../data/interfaces/profile.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    SubscriberCardComponent,
    AsyncPipe,
    JsonPipe,
    ImgUrlPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribers();
  me = this.profileService.me;

  ngOnInit() {
    firstValueFrom(this.profileService.getMyProfile());
  }
}
