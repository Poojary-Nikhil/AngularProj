import { NgModule } from '@angular/core'
import { MyUpperCasePipe } from './myupper.pipe';
import { ProductComponent } from './product.component';
import { DiscountPipe } from './discount.pipe';
import { MySearchPipe } from './search.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ChangeColorDirective } from './colorDirective.directive';

@NgModule({
    imports:[
            SharedModule,
            AppRoutingModule
    ],
    declarations:[
        ProductComponent,
        MyUpperCasePipe,
        DiscountPipe,
        MySearchPipe,
        ProductDetailsComponent,
        ChangeColorDirective
    ],
    providers:[
        ProductService,
    ]
})

export class ProductModule{

}