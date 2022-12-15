import { Component } from "@angular/core";
@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
    styleUrls:['../../app.component.css']
   
})
export class HeroeComponent{
nombre:string ='Ironman';
edad:number=22
get nombreCapitalizado():string{
    return this.nombre.toUpperCase()

}

obtenernombre():string{
    
    return `${this.nombre}- ${this.edad}`
}
cambiarnombre():void{
this.nombre = 'Spiderman';
}
cambiaredad():void{
    this.edad=33
}
}