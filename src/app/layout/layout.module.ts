import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HorizontalMenuComponent],
  exports: [HorizontalMenuComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}
