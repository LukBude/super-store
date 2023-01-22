import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingCartItemComponent],
  imports: [CommonModule, ShoppingCartRoutingModule, ReactiveFormsModule, FormsModule]
})
export class ShoppingCartModule {}
