import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePhotoComponent, ProfileDescriptionComponent, SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Profile';
  selectedLink = 'Empty selection';

  displayLink(value:string) {
    this.selectedLink = value;
  }
}
