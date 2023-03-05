import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { ofertasComponent } from './ofertas/ofertas.component';
import { padariaComponent } from './padaria/padaria.component';
import { sobreComponent } from './sobre/sobre.component';
import { contatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    sobreComponent,
    ofertasComponent,
    padariaComponent,
    contatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
