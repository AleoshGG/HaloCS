import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEquiposComponent } from './page-equipos/page-equipos.component';
import { FooterComponent } from '../footer/footer.component';
import { NavarComponent } from '../navar/navar.component';



@NgModule({
  declarations: [
    PageEquiposComponent,
    FooterComponent,
    NavarComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    EquiposModule
  ]
})
export class EquiposModule { }
