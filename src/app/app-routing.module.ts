import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CursoListComponent } from "./components/curso-list/curso-list.component";
import{CursoFormComponent}from "./components/curso-form/curso-form.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  },
  {
    path: 'cursos',
    component: CursoListComponent
  },
  
  {
    path:'cursos/add',
    component:CursoFormComponent
  },
  {
    path:'cursos/editar/:id',
    component:CursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
