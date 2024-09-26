import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { PageMarcadorComponent } from './marcador/page-marcador/page-marcador.component';
import { PageEquiposComponent } from './equipos/page-equipos/page-equipos.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'marcador', component: PageMarcadorComponent },
  { path: 'equipos', component: PageEquiposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
