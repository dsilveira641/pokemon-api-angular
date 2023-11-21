import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public sidenavWidth: any = localStorage.getItem('sidenavWidth');
  public isShiny = localStorage.getItem('isShiny');

  constructor(
      private router: Router
  ) { }


 public toogleSidenav() {
      if (this.sidenavWidth == 4) {
          this.sidenavWidth = 15;
          localStorage.setItem('sidenavWidth', '15');
      }
      else {
          this.sidenavWidth = 4;
          localStorage.setItem('sidenavWidth', '4');
      }
  }

  public themeClass() {
      return localStorage.getItem('themeClass') || 'branco';
  }

  public changeTheme(theme: any) {
      localStorage.setItem('themeClass', theme);
  }

  public changeSkin(event: any) {

      if (event.checked) {
          localStorage.setItem('isShiny', 'true');
      }
      else {
          localStorage.setItem('isShiny', 'false');
      }
  }


}
