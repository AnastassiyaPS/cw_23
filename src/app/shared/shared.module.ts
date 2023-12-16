import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {PopupComponent} from "./components/popup/popup.component";
import {TeaCardComponent} from "./components/tea-card/tea-card.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PopupComponent,
    TeaCardComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    TeaCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
