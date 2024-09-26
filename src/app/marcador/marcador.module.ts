import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMarcadorComponent } from './page-marcador/page-marcador.component';
import { NavarComponent } from '../navar/navar.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    PageMarcadorComponent,
    NavarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PageMarcadorComponent
  ]
})
export class MarcadorModule { }
