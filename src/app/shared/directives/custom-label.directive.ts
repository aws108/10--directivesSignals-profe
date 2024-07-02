import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit { // aparece en el componente product-page ccomo si fuera un elemento asociado

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string ) { //al darle al botón del cambio de color, llega aquí. Al cambiar el valor de la propiedad, debe ponerse set
    this._color = value;
    this.setStyle(); //entra cada vez que el color cambie
  }

  @Input() set errors( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }


  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('constructor de la directiva')
    // console.log(el);
    this.htmlElement = el; //encuentra la etiqueta span que es donde está incluido esta directiva
  }

  ngOnInit(): void {
    this.setStyle(); //se inicializa el rojo en el color con la propiedad _color
  }


  setStyle():void { //te llega el color y se lo estableces al html para modificar el span. Esto es gracias a [color]="color"
    if ( !this.htmlElement )return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if ( !this.htmlElement )return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors)

    if ( errors.includes('required') )  { //si en los errores se incluye el required
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido.'; //texto que se verá
      return;
    }

    if ( errors.includes('minlength') )  { //para cuando ya has escrito, que no aparezca el texto del campo requerido, que te diga cuántos carácteres deben ser
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Mínimo ${current}/${ min } caracteres.`; //caracteres que has escrito/carácteres totales
      return;
    }

    if ( errors.includes('email') )  {
      this.htmlElement.nativeElement.innerText = 'No tiene formato de correo.';
      return;
    }



  }


}
