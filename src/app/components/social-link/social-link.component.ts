import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { SocialLink } from '../../models/social-link';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input()
  socialLink: SocialLink | undefined;
  


  

  @Output()
  selectLink = new EventEmitter <SocialLink>();

  value = "selected link: ";

  getLink(): void {
    console.log(this.socialLink);
   
    this.selectLink.emit(this.socialLink)
  }
}
