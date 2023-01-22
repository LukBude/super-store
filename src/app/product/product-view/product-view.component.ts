import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
