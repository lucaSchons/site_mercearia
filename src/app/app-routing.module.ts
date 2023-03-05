import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";
import { homeComponent } from "./home/home.component";
import { ofertasComponent } from "./ofertas/ofertas.component";
import { padariaComponent } from "./padaria/padaria.component";
import { sobreComponent } from "./sobre/sobre.component";
import { contatoComponent } from "./contato/contato.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: homeComponent },
    { path: 'sobre', component: sobreComponent },
    { path: 'ofertas', component: ofertasComponent },
    { path: 'padaria', component: padariaComponent },
    { path: 'contato', component: contatoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}