import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <nav>
      <a routerLink="/home">Home</a>

      @for(productEntry of productTitles; track productEntry;) {
      <a [routerLink]="['details', $index]" [routerLinkActive]="['active']">
        {{ productEntry }} </a
      >- }
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
