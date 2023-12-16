import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {TeaComponent} from "./tea/tea.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CatalogComponent,
    TeaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
