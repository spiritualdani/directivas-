import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDirective } from './directivas/player.directive';
import { YoungModule } from './young/young.module'

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    YoungModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
