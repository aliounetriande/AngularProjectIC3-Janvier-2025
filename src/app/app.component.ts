import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { SocialLink} from './models/social-link';
import {DataService} from './services/data.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePhotoComponent, ProfileDescriptionComponent, SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Profile';
  socialLink: SocialLink | undefined;
  selectedLink: string | undefined;
  linkTab: SocialLink [] = [
    {
      name: 'Github',
      link: 'https://github.com/Alioune'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/feed/'
    },
    {
      name: 'Twitter',
      link: 'https://x.com/Davincij15?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
  ];

  constructor() {
  }

  ngOnInit() {
    console.log('from ngOnInit');
    this.linkTab = this.dataService.getLinks()
  }

  displayLink(value:SocialLink) {
    this.selectedLink = value.link;
  }

  reset() {
    this.selectedLink = '';
  }
}
