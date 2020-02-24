import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[appcolor]'
})

export class ChangeColorDirective {
    constructor(private Element : ElementRef ){
        Element.nativeElement.style.color='hotpink';
    }
    
}