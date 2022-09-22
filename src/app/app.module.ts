import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtendenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
