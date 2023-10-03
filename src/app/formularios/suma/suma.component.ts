import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  num1:number=0;
  num2:number=0;
  res:number=0;
  sumar(){
    this.res = this.num1 + this.num2; 
    return this.res; 
  }
}
