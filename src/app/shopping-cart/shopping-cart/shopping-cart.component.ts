import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../shared/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems$?: Observable<CartItem[]>;
  subTotal$?: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems$ = this.shoppingCartService.cartItems$;
    this.subTotal$ = this.shoppingCartService.subTotal$;
  }

  onContinue(): void {
    this.router.navigate(['products']);
  }

  onCheckout(): void {
    this.router.navigate(['checkout']);
  }
}
