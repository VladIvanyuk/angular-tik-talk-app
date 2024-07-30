import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { IProfile } from '../../data/interfaces/profile.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: IProfile;
}
