import { Component } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {

}
