import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular//core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: CardComponent },
    { path: 'skills', component: ProfessionalSkillsComponent },
    { path: 'contact', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}