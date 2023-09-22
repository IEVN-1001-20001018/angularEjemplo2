import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //Directivas *ngif

  imageWidth:number=50;
  imageMargin:number=2; 
  muestraImg:boolean=true; 
  listFilter:string=''; 

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
product:IProductos[]=[
  {
    "productoId":1, 
    "Modelo":"Sentra", 
    "Descripcion":"4 puertas familiar", 
    'year':"febrero 3 2020", 
    "Precio":150000, 
    "Marca":"NISSAN", 
    "Color":"Morado", 
    "imagenUrl":"https://th.bing.com/th/id/OIP.OcZoq9zmrN4AzSQxfpzp9QHaE6?pid=ImgDet&rs=1"
  },
  {
    "productoId":2, 
    "Modelo":"A4", 
    "Descripcion":"4 puertas familiar", 
    'year':"febrero 3 2021", 
    "Precio":200000, 
    "Marca":"AUDI", 
    "Color":"Blanco", 
    "imagenUrl":"https://th.bing.com/th/id/OIP.5YDjXY1kVY1SzzEM218T-QHaEg?pid=ImgDet&rs=1"
  },
  {
    "productoId":3, 
    "Modelo":"Rio", 
    "Descripcion":"2 puertas familiar", 
    'year':"Marzo 5 2022", 
    "Precio":150000, 
    "Marca":"KIA", 
    "Color":"Azul", 
    "imagenUrl":"https://th.bing.com/th/id/OIP.qh_TxKQoVmogWpvW6yBE5gHaE6?pid=ImgDet&rs=1"
  }
]
}
