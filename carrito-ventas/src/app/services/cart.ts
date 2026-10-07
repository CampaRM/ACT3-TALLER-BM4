import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrito, Producto } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<ItemCarrito[]>([]);
  public cartItems$: Observable<ItemCarrito[]> = this.itemsSubject.asObservable();

  private get itemsActuales(): ItemCarrito[] {
    return this.itemsSubject.getValue();
  }

  agregarProducto(producto: Producto): void {
    const items = [...this.itemsActuales];
    const index = items.findIndex(item => item.producto.id === producto.id);

    if (index > -1) {
      items[index] = {
        ...items[index],
        cantidad: items[index].cantidad + 1
      };
    } else {
      items.push({ producto, cantidad: 1 });
    }

    this.itemsSubject.next(items);
  }

  actualizarCantidad(productoId: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.eliminarProducto(productoId);
      return;
    }

    const items = this.itemsActuales.map(item => {
      if (item.producto.id === productoId) {
        return { ...item, cantidad };
      }
      return item;
    });

    this.itemsSubject.next(items);
  }

  eliminarProducto(productoId: number): void {
    const items = this.itemsActuales.filter(item => item.producto.id !== productoId);
    this.itemsSubject.next(items);
  }

  vaciarCarrito(): void {
    this.itemsSubject.next([]);
  }
}