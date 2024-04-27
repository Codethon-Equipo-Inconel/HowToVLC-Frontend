import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'recursos',
  component: RecursosComponent
},
{
  path: 'eventos',
  component: EventosComponent
},
{
  path: 'mapa',
  component: MapaComponent
},
{
  path: 'perfil',
  component: PerfilComponent
},
{
  path: '', redirectTo: 'login', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
