import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input()
  name = 'Empty';

  @Output()
  selectLink = new EventEmitter <string>();

  getLink(): void {
    console.log(this.name);
    const value = 'Selected link: ' + this.name;
    this.selectLink.emit(value)
  }
}
