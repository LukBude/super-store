import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ProductViewComponent },
  {
    path: ':id',
    children: [
      {
        path: '',
        loadChildren: () => import('./product-details/product-details.module').then((m) => m.ProductDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
