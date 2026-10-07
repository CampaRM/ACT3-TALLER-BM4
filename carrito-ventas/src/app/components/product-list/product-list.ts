import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../model/cart';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1200 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 120 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 100 },
    { id: 4, nombre: 'Mochila Red Bull Racing', precio: 90 },
    { id: 5, nombre: 'Termo Térmico 750ml', precio: 45 },
    { id: 6, nombre: 'Pack de Stickers F1', precio: 15 },
    { id: 7, nombre: 'Pin Coleccionable Red Bull', precio: 50 },
    { id: 8, nombre: 'Audífonos Bluetooth Gaming', precio: 65 },
    { id: 9, nombre: 'Cargador Carga Rápida 65W', precio: 30 }
  ];

  constructor(private cartService: CartService) {}

  agregar(producto: Producto): void {
    this.cartService.agregarProducto(producto);
  }
}