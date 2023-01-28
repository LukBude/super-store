import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [HorizontalMenuComponent, SpinnerComponent],
  exports: [HorizontalMenuComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}
