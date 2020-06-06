/*
    Este archivo se encargará de administrar los componentes
    de acuerdo a las rtas que se le especifiquen.
    Necesitamos importar el Modulo NgModule que nos dará el decorador.
    Un módulo llamado RouerModule.
*/

//Destructuring - el elemento delarado a la izquierda 
//pertenece o deriva del elemento declarado a la derecha
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Importar los componentes que se deben mostrar de acuerdo a la ruta
import{ BodyComponent } from './components/body/body.component';
import{ GeneroComponent } from './components/genero/genero.component';
import{ RockComponent } from './components/rock/rock.component';
import{ SalsaComponent } from './components/salsa/salsa.component'
import{ CumbionesComponent } from './components/cumbiones/cumbiones.component';
import{ ContactoComponent } from './components/contacto/contacto.component';

/* 
    Crearemos una constante de tipo Routes a través de typescript 
    cuyo valor será un arreglo de json donde tendremos las rutas 
    enlazados o relacionadas con los componentes que deseemos mostrar

    var nombre = 'Kevin' JS
    var nombre : String = 'Kevin' TS
*/

const routes : Routes = [
    {path: '', component: BodyComponent},
    {path: 'genero', component: GeneroComponent},
    {path: 'rock', component: RockComponent},
    {path: 'salsa', component: SalsaComponent},
    {path: 'cumbiones', component: CumbionesComponent},
    {path: 'contacto', component: ContactoComponent}

];

/* 
    Configuramos nuestro decorador NgModule
        Añadimos la constante routes en la raíz del módulo RouterModule
            esto para cuando se exporte la clase app-routing  y se importe 
            en la app.module, no tenga problemas con las rutas a la hora de
            navegación por parte del usuario en la aplicación.
*/
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}