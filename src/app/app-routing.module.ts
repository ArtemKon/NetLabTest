import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'form', loadChildren: './components/form/form.module#FormModule'
  },
  {
    path: 'form/edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
