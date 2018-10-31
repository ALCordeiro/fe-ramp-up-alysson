import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const mainRoutes: Routes = [
    { path: 'about', component: CardComponent },
    { path: 'skills', component: ProfessionalSkillsComponent },
    { path: 'contact', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}