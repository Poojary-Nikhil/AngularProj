import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterGuards } from './product/product.guard';

const routes:Routes=[
    {path:'product', component :ProductComponent},
    {path:'product/:id',canActivate:[RouterGuards], component:ProductDetailsComponent},
    { path: "home", component: HomeComponent },
    { path: "orders", component: OrdersComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    providers:[RouterGuards]
})

export class AppRoutingModule{

}

   
      
