import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string=''; 
  num2:string=''; 
  resultado:number=0; 
  sumar():void{
      this.resultado= parseInt(this.num1)+parseInt(this.num2); 
  }

  restar():void{
    this.resultado = parseInt(this.num1) - parseInt(this.num2); 
  }
  multiplicar():void{
    this.resultado = parseInt(this.num1)*parseInt(this.num2)
  }

  dividir():void{
    this.resultado = parseInt(this.num1)/parseInt(this.num2)
  }

  operacion(){
    if(document.querySelector('input[id="flexRadioDefault1"]:checked')){
      this.sumar(); 
    }
    if(document.querySelector('input[id="flexRadioDefault2"]:checked')){
      this.restar(); 
    }
    if(document.querySelector('input[id="flexRadioDefault3"]:checked')){
      this.multiplicar(); 
    }
    if(document.querySelector('input[id="flexRadioDefault4"]:checked')){
      this.dividir(); 
    }
  }
}
