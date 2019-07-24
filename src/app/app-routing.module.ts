import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'young', loadChildren:'./young/young.module#YoungModule'},  // #Clase 
  {path: '', pathMatch: 'full', redirectTo:'young'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
