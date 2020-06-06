import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importamos el módulo rutas que hemos creado 
import{ AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';

//Debemos importar el elemento creado en header.component.ts
import { HeaderComponent } from './components/header/header.component';

//El decorador NgModule se encarga de distribuir los nuevos elementos importados de acuerdo su funcionalidad
//En el atributo declarations, se indican los componentes.
//En el atributo imports, se indican los modulos a usar.      //Nuestros modulos propios
//En el atributo providers, se indican los servicios que Angulaar consumirá.      //Recursos de terceros
//En el atributo bootstrap. se indica el componente principal que va a renderizar todos los
//   componentes que se encuentren anidados en el.

import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { GeneroComponent } from './components/genero/genero.component';
import { RockComponent } from './components/rock/rock.component';
import { SalsaComponent } from './components/salsa/salsa.component';
import { CumbionesComponent } from './components/cumbiones/cumbiones.component';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    GeneroComponent,
    RockComponent,
    SalsaComponent,
    CumbionesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
