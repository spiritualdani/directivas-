import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoungRoutingModule } from './young-routing.module';
import { YoungProfileComponent } from './young-profile/young-profile.component';
import { YoungListComponent } from './young-list/young-list.component';
import { YoungDetailComponent } from './young-detail/young-detail.component';

@NgModule({
  declarations: [YoungProfileComponent, YoungListComponent, YoungDetailComponent],
  imports: [
    CommonModule,
    YoungRoutingModule
  ]
})
export class YoungModule { }
