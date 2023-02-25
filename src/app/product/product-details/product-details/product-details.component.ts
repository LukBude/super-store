import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/product';
import { ProductService } from '../../../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../../../shared/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  private subs: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.productService
        .getProducts()
        .subscribe(
          (products: Product[]) =>
            (this.product = products.find(
              (product: Product) => '' + product.id == this.activatedRoute.snapshot.paramMap.get('id')
            ))
        )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onButtonClick(): void {
    this.shoppingCartService.addToCart(this.product!);
  }
}
