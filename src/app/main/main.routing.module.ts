import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// import { CardComponent } from './card/card.component';
// import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';

const mainRoutes: Routes = [
    { path: 'about', loadChildren: '../main/card/card.module#CardModule' },
    { path: 'contact', loadChildren: '../main/contact-form/contact-form.module#ContactFormModule' },
    { path: 'skills', loadChildren: '../main/professional-skills/professional-skills.module#ProfessionalSkillsModule' }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}