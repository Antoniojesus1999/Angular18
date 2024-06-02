import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  { path: 'dashboard', component: PagesComponent, children: [

    { path: '', component: DashboardComponent},
    { path: 'progress', component: ProgressComponent},
    { path: 'grafica', component: GraficaComponent},
    { path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}

