import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems: CartItem[] = [];

  private cartItemsState = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsState.asObservable();

  private subTotalState = new BehaviorSubject<number>(0);
  subTotal$: Observable<number> = this.subTotalState.asObservable();

  private numCartItemsState = new BehaviorSubject<number>(0);
  numCartItems$: Observable<number> = this.numCartItemsState.asObservable();

  addToCart(product: Product): void {
    const itemIndex = this.cartItems.findIndex((item: CartItem) => item.product.id === product.id);
    if (itemIndex === -1) {
      this.cartItems.push({ product: product, quantity: 1 });
    } else {
      const item = this.cartItems[itemIndex];
      this.cartItems[itemIndex] = { ...item, quantity: item.quantity >= 9 ? 10 : (item.quantity += 1) };
    }
    this.updateObservables();
  }

  setQuantity(product: Product, quantity: number): void {
    const itemIndex = this.cartItems.findIndex((item: CartItem) => item.product.id === product.id);
    this.cartItems[itemIndex] = { ...this.cartItems[itemIndex], quantity: quantity };
    this.updateObservables();
  }

  removeFromCart(cartItem: CartItem): void {
    const itemIndex = this.cartItems.findIndex((item: CartItem) => item.product.id === cartItem.product.id);
    this.cartItems.splice(itemIndex, 1);
    this.updateObservables();
  }

  resetCart(): void {
    this.cartItems = [];
    this.updateObservables();
  }

  private calculateSubTotal(): number {
    let subTotal = 0;
    for (let item of this.cartItems) {
      subTotal += item.product.price * item.quantity;
    }
    return subTotal;
  }

  private findNumCartItems(): number {
    let numCartItems = 0;
    for (let item of this.cartItems) {
      numCartItems += item.quantity;
    }
    return numCartItems;
  }

  private updateObservables(): void {
    this.cartItemsState.next(this.cartItems);
    this.subTotalState.next(this.calculateSubTotal());
    this.numCartItemsState.next(this.findNumCartItems());
  }
}
