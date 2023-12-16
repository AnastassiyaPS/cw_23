import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private fb: FormBuilder) {
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zа-яA-ZА-Я]*')]],
    last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+]*$/), Validators.maxLength(12)]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    product: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\/\-]*$/)]],
    comment: [''],
  });

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        // this.formValues.product = params['product'];
        this.orderForm.patchValue({product: params['product']});
        console.log('Product value:', this.orderForm.get('product')?.value);
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  public createOrder() {
    if (this.orderForm.valid) {
      this.subscriptionOrder = this.productService.createOrder({
        name: this.orderForm.get('name')?.value,
        last_name: this.orderForm.get('last_name')?.value,
        phone: this.orderForm.get('phone')?.value,
        country: this.orderForm.get('country')?.value,
        zip: this.orderForm.get('zip')?.value,
        product: this.orderForm.get('product')?.value,
        address: this.orderForm.get('address')?.value,
        comment: this.orderForm.get('comment')?.value,
      }).subscribe(response => {
        if (response.success && !response.message) {
          $('#form-container').hide();
          $('#thanks-message').show();

          this.orderForm.reset();
          this.orderForm.get('product')?.setValue('');
        } else {
          $('#error-message').show();
        }
      });
    } else {
      console.log('Что-то пошло не так');
    }
  }

}
