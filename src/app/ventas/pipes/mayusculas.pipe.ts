import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'  //es el nombre con el que usamos el pipe
})
export class MayusculasPipe implements PipeTransform{
    transform(valor: string, enMayusculas: boolean = true): string {
        // if (enMayusculas){
        //     return valor.toUpperCase();
        // } else{
        //     return valor.toLowerCase()
        // }
        
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()
        
        
    }



} //el pipeTransform es el metodo que se va a ejecutar cada vez que alguien utlice el pipe

// = true para hacerlo opcional