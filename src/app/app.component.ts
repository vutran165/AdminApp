import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // this approach is using animations way
  //
  //
  // animations: [
  //   trigger('slideInOut', [
  //     state('out', style({
  //       transform: 'translate3d(-400%,0,0)'
  //     })),
  //     state('in', style({
  //       transform: 'translate3d(-500%,0,0)'
  //     })),
  //     transition('in => out', animate('400ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ])
  // ]
})
export class AppComponent {
  title = 'app';

 // public menuState: string = 'out';

  // toggleMenu() {
  //   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  // }

  faAlignLeft = faAlignLeft ;
  faUser =faUser;



}
