import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductRoutingModule } from './product-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ProductCardComponent, ProductViewComponent],
  exports: [ProductCardComponent, ProductViewComponent],
  imports: [CommonModule, ProductRoutingModule, LayoutModule]
})
export class ProductModule {}
