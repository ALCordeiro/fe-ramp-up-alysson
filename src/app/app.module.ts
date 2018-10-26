import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SocialBarComponent } from './social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ProfessionalSkillsComponent,
    ContactFormComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    //FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
