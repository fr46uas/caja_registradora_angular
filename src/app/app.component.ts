import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: any[];

  constructor() {

    this.productosSeleccionados = [];

    this.arrComida = [
      new Producto('Hamburguesa', 5, 'https://www.goikogrill.com/wp-content/uploads/2017/12/WEB__0010_M_Mulata-e1533293492157-300x300.jpg'),
      new Producto('Ensalada', 7, 'https://pasteleriamanacor.es/wp-content/uploads/2019/03/C5A0912-300x300.jpg'),
      // tslint:disable-next-line: max-line-length
      new Producto('Burrito', 8, 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/updated_main_images/1001p88-bean-burritos-x_0.jpg?itok=cYW9iPQH'),
      new Producto('Nachos', 6, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Pizza', 4, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Patatas', 1, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
    ];

    this.arrBebida = [
      new Producto('Coca-cola', 2, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Pepsi', 1, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Agua', 1, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Cerveza', 3, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Vino', 4, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
      new Producto('Zumo', 3, 'http://www.ristorantedamika.com/wp-content/uploads/2016/04/cc-33cl-300x300.jpg'),
    ];

  }
  manejaProductoSeleccionado($event) {
    const encontrado = this.productosSeleccionados.find((item) => {
      return item.producto.nombre === $event.nombre;
    });
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.productosSeleccionados.push({
        cantidad: 1,
        producto: $event
      });
    }
  }
}
