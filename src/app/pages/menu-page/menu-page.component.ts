import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  imports: [],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  restart(){
    this.navigateTo('');
  }
}
