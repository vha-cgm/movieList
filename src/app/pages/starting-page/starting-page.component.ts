import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  imports: [],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.scss'
})
export class StartingPageComponent {
  private router = inject(Router);

  onTap(){
    this.router.navigate(['menu'], { replaceUrl: true });
  }

}
