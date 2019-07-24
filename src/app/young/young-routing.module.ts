import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoungProfileComponent } from './young-profile/young-profile.component';
import { YoungListComponent } from './young-list/young-list.component';
import { YoungDetailComponent } from './young-detail/young-detail.component';  

const routes: Routes = [
  {
    path: '', // estará vacío  
    component: YoungProfileComponent, 
    children: [
        {
          path: 'list', 
          component: YoungListComponent
        }, 
        {
          path: 'detail', 
          component: YoungDetailComponent
        }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoungRoutingModule { }
