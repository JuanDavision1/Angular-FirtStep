import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls:['../../app.component.css']
})
export class ListadoComponent  {

  heroes : string[]=['hos','fsdf','sddff','sdfd','sdfs']
  heroBorrado :string=''
  borrarHeroe(){
    this.heroBorrado=  this.heroes.shift() || '';

  }


}
