import { Component } from "@angular/core";

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.scss'],
})

export class ofertasComponent{

    
    abrirModal(){
        console.log('clicou para abrir modal')
        const modalexe = document.querySelector("dialog")
        modalexe?.showModal()
    }

    fecharModal(){
        const modalfechar = document.querySelector("dialog")
        modalfechar?.close();
    }
    

}
