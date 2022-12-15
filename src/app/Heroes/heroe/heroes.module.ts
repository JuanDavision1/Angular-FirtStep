import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que quiero que sea visible fuera del modulo
    exports:[
        ListadoComponent
    ],
    //aqui van modulos en los imports
    imports:[
        //mportante porner el commonmodule
        CommonModule
    ]
})
export class HeroesModule{

}