import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  links: SocialLink [] = [
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

  getLink(): SocialLink[] {
    return this.links
  }
}
