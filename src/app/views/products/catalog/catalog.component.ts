import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {Subscription, tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  public products: ProductType[] = [];
  private subscription: Subscription | null = null;

  ngOnInit() {
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {

        })
      )

      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
