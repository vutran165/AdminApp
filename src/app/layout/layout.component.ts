import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock,faEnvelope,faCog  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  faAlignLeft = faAlignLeft ;
  faUser =faUser;
  faLock = faLock;
  faEnvelope = faEnvelope;
  faCog = faCog;




}
