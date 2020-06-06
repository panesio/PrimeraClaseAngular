//Importar la clase component del núcleo de Angular

import{ Component } from '@angular/core';  // De la carpeta raíz de angular tomarás un elemento componente

//Se conoce como decorador a toda clase que está precedida por un @
//Recibirá ciertos Jsons los cuales debe referenciar o distribuir en angular
@Component({
    selector: 'app-header', // Cualquier nombre
    templateUrl: './header.component.html',  // './' referencia a que debe buscar en la carpeta raíz en donde estamos
    // template: `<h1>Hola</h1>`
    styleUrls: ['./header.component.css']
    // styles: `h1{color:red;}`
})

export class HeaderComponent{

}

//Seguidamente nos vamos a app.module.ts
