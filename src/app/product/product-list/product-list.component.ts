import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //Directivas *ngif
product:any[]=[
  {
    "productoId":1, 
    "Modelo":"Sentra", 
    "Descripcion":"4 puertas familiar", 
    'year':"febrero 3 2020", 
    "Precio":150000, 
    "Marca":"NISSAN", 
    "Color":"Morado", 
    "imagenUrl":"Datos pendientes"
  },
  {
    "productoId":3, 
    "Modelo":"Rio", 
    "Descripcion":"2 puertas familiar", 
    'year':"Marzo 5 2022", 
    "Precio":150000, 
    "Marca":"KIA", 
    "Color":"Azul", 
    "imagenUrl":"Datos pendientes"
  }
]
}
