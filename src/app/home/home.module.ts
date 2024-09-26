import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavarComponent } from '../navar/navar.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    NavarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeModule
  ]
})
export class HomeModule { }
