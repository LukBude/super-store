import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/product';
import { ProductService } from '../../../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  private subs: Subscription = new Subscription();

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subs.add(
      this.productService
        .getProducts()
        .subscribe(
          (products) =>
            (this.product = products.find(
              (product) => '' + product.id == this.activatedRoute.snapshot.paramMap.get('id')
            ))
        )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
