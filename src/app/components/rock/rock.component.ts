import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit {

 /* Binding -> Angular
      Property binding = Enlazar atributos del html de forma dinámica 
          ej: <etiqueta [atributo] = "variable"> 
    */

   imagen = ['assets/img/scorpions.jpg','assets/img/acdc.jpg'];

  mostrar (e){
        alert("Chinga tu madre EdMaverick");
  }

  datoUser(usuario){
    alert(usuario);
  }

  datosArtista= {
    nombre: 'Scorpions',
    info: 'Inglaterra'
  }










  constructor() { }

  ngOnInit(): void {
  }

}
