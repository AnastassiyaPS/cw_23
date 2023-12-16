import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'tea-card-item',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit{

  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: err => {
              this.router.navigate(['/']);
            }
          });
      }
    });
  }
}
