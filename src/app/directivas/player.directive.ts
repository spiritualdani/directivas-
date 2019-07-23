import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPlayer]'
})
export class PlayerDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') // Evento + funcion 
  public onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "red"; 
    this.element.nativeElement.style.width = "100%";  
    this.element.nativeElement.style.align = "center";    

  }
  @HostListener('mouseleave') // Mouse deje de apuntar algo: Evento + funcion
  public onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "green"; 
    this.element.nativeElement.style.width = "100%"; 
    this.element.nativeElement.style.align = "center";

  }
}
