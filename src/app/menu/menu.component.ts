import { Component, OnInit } from '@angular/core';
import { faTh, faServer, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faTh = faTh;
  faServer = faServer;
  faChartBar = faChartBar;

  showMenu: string = '';

  constructor() { }

  ngOnInit() {
  }

  addExpandClass(element: any){
      if(element === this.showMenu)
      {
          this.showMenu = '0';
      }else {
        this.showMenu = element;
      }
  }

  

}
