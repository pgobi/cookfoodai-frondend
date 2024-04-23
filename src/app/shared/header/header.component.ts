import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // Declaration of the sideNav property of type MatSidenav
  @ViewChild('sidenav') sidenav: MatSidenav;

  // Declaration of the route property of type ActivatedRout
  route: ActivatedRoute;

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
  }
  ngAfterViewInit(){
    //this.main.height = 100 - (this.toolbar.height + this.footer.height)
    console.log( "toolbar" );
  }
}
