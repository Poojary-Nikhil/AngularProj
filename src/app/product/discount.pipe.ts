import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'Discount'
})

export class DiscountPipe implements PipeTransform{
    transform(value: number, discount:number){
        value = value - discount;
        return value;
    }

}