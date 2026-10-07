import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtotalPipe } from '../../pipes/subtotal-pipe';
import { CartTotalPipe } from '../../pipes/cart-total-pipe';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, SubtotalPipe, CartTotalPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummaryComponent {
  //inyección de dependencia directa
  private cartService = inject(CartService);
  cartItems$ = this.cartService.cartItems$;

  cambiarCantidad(productoId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const cantidad = parseInt(input.value, 10);
    this.cartService.actualizarCantidad(productoId, cantidad);
  }

  eliminar(productoId: number): void {
    this.cartService.eliminarProducto(productoId);
  }

  vaciar(): void {
    this.cartService.vaciarCarrito();
  }
}