import { Component } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { ProductService } from "./product.service";
import { IProduct } from "./product.model";
import { ProductComponent } from './product.component';

@Component({
  selector: "app-productdetails",
  templateUrl: "./product-details.component.html"
})

export class ProductDetailsComponent {
  id: number;
  details:IProduct[];
  constructor(private route: ActivatedRoute,
  private productservice: ProductService,
  private router:Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this .productservice.getProductDetails(this.id)
    .subscribe((data)=>this.details=data)
  }
  Back():void{
    this.router.navigate(['./product'])
  }
}
