import { ModuleWithProviders } from '@angular//core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: CardComponent },
    { path: 'skills', component: ProfessionalSkillsComponent },
    { path: 'contact', component: ContactFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);