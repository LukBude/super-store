import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../shared/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  confirmed: boolean = false;
  valid: boolean = false;
  checkoutForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(45), Validators.pattern('^[a-zA-Z]*$')],
        updateOn: 'blur'
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(45), Validators.pattern('^[a-zA-Z]*$')],
        updateOn: 'blur'
      }),
      street: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(45), Validators.pattern('^[a-zA-Z .]*$')],
        updateOn: 'blur'
      }),
      houseNumber: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')],
        updateOn: 'blur'
      }),
      houseNumberAffix: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(1), Validators.pattern('^[a-zA-Z]*$')],
        updateOn: 'blur'
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')],
        updateOn: 'blur'
      }),
      country: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')],
        updateOn: 'blur'
      }),
      city: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')],
        updateOn: 'blur'
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^\\w+\\.{1}\\w+@{1}\\w+\\.{1}\\w{2,3}')],
        updateOn: 'blur'
      })
    });
  }

  onConfirm(): void {
    this.confirmed = true;
    this.valid = this.checkoutForm.valid;
    if (this.valid) {
      this.shoppingCartService.resetCart();
    }
  }

  onContinue(): void {
    if (this.checkoutForm.valid) {
      this.router.navigate(['products']);
    }
  }
}
