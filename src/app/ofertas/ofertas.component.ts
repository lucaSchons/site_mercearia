import { Component } from "@angular/core";

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.scss'],
})

export class ofertasComponent{

    openModal = () => {
        const overlay: any = document.getElementById("overlay");
        const modal: any = document.getElementById("modal");
        overlay.style.display = 'flex'
        modal.style.display = 'flex'
        setTimeout(() => { document.addEventListener('click', this.handleClickOutside, false) }, 200);
    }

    handleClickOutside = ($event: any) => {
        let overlay = document.getElementById("overlay");
        let modal = document.getElementById("modal");
        let fechar = document.getElementById("fechar");
        
        if (!modal?.contains($event.target) || fechar?.contains($event.target)) {
            modal!.style.display = 'none';
            overlay!.style.display = 'none';
            document.removeEventListener('click', this.handleClickOutside, false);
        }
    }

}
