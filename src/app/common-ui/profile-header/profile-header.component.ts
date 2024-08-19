import { Component, input } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { IProfile } from '../../data/interfaces/profile.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe, NgFor],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<IProfile>();
}
