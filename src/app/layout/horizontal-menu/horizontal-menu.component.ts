import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {
  numCartItems$?: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.numCartItems$ = this.shoppingCartService.numCartItems$;
  }

  ngOnInit(): void {}
}
