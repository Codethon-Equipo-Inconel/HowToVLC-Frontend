import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { RecursoComponent } from './pages/recursos/componentes/recurso/recurso.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
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
  path: 'recurso',
  component: RecursoComponent
},
{
  path: 'eventos',
  component: EventosComponent
},
{
  path: 'perfil',
  component: PerfilComponent
},
{
  path: '', redirectTo: 'login', pathMatch: 'full'
}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
