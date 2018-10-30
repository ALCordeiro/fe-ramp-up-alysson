import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { InformationsService } from './services/informations.service';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ProfessionalSkillsComponent,
    ContactFormComponent,
    SocialBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [InformationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
