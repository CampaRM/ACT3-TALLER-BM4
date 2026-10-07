import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { CartSummaryComponent } from './components/cart-summary/cart-summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CartSummaryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}