import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor:string="gray"
  private defaultColor:string="aqua"
  private defaultHeight:number= 200

  constructor(private el:ElementRef ) {
    
    this.setHeight(this.defaultHeight)
    this.setBorder(this.initialColor)
    
   }
   @Input("pkmBorderCard") declare borderColor:string
   @HostListener("mouseenter") onMouseEnter(){
    this.setBorder(this.borderColor||this.defaultColor)

   }
   @HostListener("mouseleave") onMouseLeave(){
    this.setBorder('#f5f5f5')

   }
   setHeight(height: number){
    
    this.el.nativeElement.style.height =`${height}px`

   }
   setBorder(color:string){
    this.el.nativeElement.style.border =`5px solid ${color}`

   }
}


//améliorer le code de façon a ce que plutot que de passer par des valeurs donnée en dure, nous passions par des propriétés rendant ce code dynamque:
//les valeurs sont: 
//initial color: couleur initiale au chargement de la page, default color : couleur par défait si aucune couleur n'est donnée, default height: la hauteur par defaut