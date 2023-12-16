import {Injectable} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerOrderType} from "../../types/customer-order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  // private products: ProductType[] = [];

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: CustomerOrderType) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data);
  }

}
