import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './navar/navar.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { PageEquiposComponent } from './equipos/page-equipos/page-equipos.component';
import { PageMarcadorComponent } from './marcador/page-marcador/page-marcador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    FooterComponent,
    PageHomeComponent,
    PageEquiposComponent, 
    PageMarcadorComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
