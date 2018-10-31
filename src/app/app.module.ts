import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { NavbarModule } from './navbar/navbar.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    MainModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
