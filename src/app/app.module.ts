import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';

import { ProfessionalSkillsModule } from './professional-skills/professional-skills.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { CardModule } from './card/card.module';
import { NavbarModule } from './navbar/navbar.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ProfessionalSkillsModule,
    ContactFormModule,
    CardModule,
    NavbarModule,
    CoreModule,
    routing
  ],
  // providers: [InformationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
