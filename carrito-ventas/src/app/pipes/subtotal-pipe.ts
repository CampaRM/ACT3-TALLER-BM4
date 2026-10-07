import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtotal',
  standalone: true
})
export class SubtotalPipe implements PipeTransform {
  transform(precio: number, cantidad: number): number {
    if (!precio || !cantidad) return 0;
    return precio * cantidad;
  }
}