import { Component, Input } from '@angular/core';
import { Product } from '../../shared/product';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {}

  onImageClick(): void {
    this.router.navigate(['products', this.product?.id]);
  }

  onButtonClick(product: Product): void {
    this.shoppingCartService.addToCart(product);
  }
}
