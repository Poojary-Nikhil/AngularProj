import { Pipe, PipeTransform } from '@angular/core'
import { ValueTransformer } from '@angular/compiler/src/util'

@Pipe({
    name:'myuppercase'
})

export class MyUpperCasePipe implements PipeTransform{
    transform(value:string, typereq:string){
        if(typereq=="upper"){
            value = value.toUpperCase();
        }
        else{
            value = value.toLowerCase();
        }
        return value;
    }
}