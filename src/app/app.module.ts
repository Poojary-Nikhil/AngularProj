import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { OrdersComponent } from "./orders/orders.component";
import { OrderService } from "./orders/order.service";
import { ProductModule } from "./product/product.module";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule    
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
