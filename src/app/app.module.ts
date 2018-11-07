import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { CoreModule } from './core/core.module';
import { LoginService } from './core/services/login/login.service';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './core/guards/login.guard';
import { InformationsResolver } from './core/guards/informations.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [LoginService, LoginGuard, InformationsResolver]
})
export class AppModule { }
