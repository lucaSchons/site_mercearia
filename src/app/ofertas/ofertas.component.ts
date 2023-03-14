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
        let imagens: any = document.querySelectorAll('.small-img');
        let modal_img: any = document.getElementById("img_modal");
        let desc_modal: any = document.getElementById("desc_modal");
        let srcVal = "";
        let valueVar = "";
        
        for(let i=0; i < imagens.length; i++){
            imagens[i].addEventListener('click', () =>{
                srcVal = imagens[i].getAttribute('src');
                modal_img.setAttribute('src', srcVal);
                
                if(i == 0){
                    valueVar = "Ofertas! | 10/03 - 12/03";
                    desc_modal.setAttribute('value', valueVar);
                }
                if(i == 1){
                    valueVar = "Ofertas! | 03/03 - 05/03";
                    desc_modal.setAttribute('value', valueVar);
                }
                if(i == 2){
                    valueVar = "Ofertas! | 10/02 - 12/02";
                    desc_modal.setAttribute('value', valueVar);
                }
                 
                overlay.style.display = 'flex'
                modal.style.display = 'flex'
                
                setTimeout(() => { document.addEventListener('click', this.handleClickOutside, false) }, 200);
            })
        }
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