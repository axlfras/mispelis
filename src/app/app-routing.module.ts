import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListaComponent } from './pages/page-lista/page-lista.component';


const routes: Routes = [
  { component: PageHomeComponent, path: ''},
  { component: PageHomeComponent, path: 'home'},
  { component: PageListaComponent, path: 'lista'},
  { component: PageHomeComponent, path: '**'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
