import { Pipe, PipeTransform } from '@angular/core';
import { ItemCarrito } from '../model/cart';

@Pipe({
  name: 'cartTotal',
  standalone: true
})
export class CartTotalPipe implements PipeTransform {
  transform(items: ItemCarrito[] | null): number {
    if (!items || items.length === 0) return 0;
    return items.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
  }
}