import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import { CartItem } from '../../shared/cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem?: CartItem;
  price?: number;

  options: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.price = this.cartItem!.product.price * this.cartItem!.quantity;
  }

  onQuantityChange(quantity: string): void {
    this.shoppingCartService.setQuantity(this.cartItem!.product, +quantity);
  }

  onDeleteItem(cartItem: CartItem): void {
    this.shoppingCartService.removeFromCart(cartItem);
  }
}
