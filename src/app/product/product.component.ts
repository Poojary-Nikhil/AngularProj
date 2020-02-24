import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  selector: "app-prod",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  tittle: string = "Product App";
  imageWidth: number = 80;
  showImage: boolean = false;
  showTable: boolean = true;
  userText: string = "";

  constructor(private productService:ProductService){}
  products: IProduct[];


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  dataRecieve(message:string)
  {
    this.tittle="Product Pages " +message;
  }
  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data)=>this.products=data);
  }

}
