import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', loadChildren: './main/card/card.module#CardModule' },
    { path: 'contact', loadChildren: './main/contact-form/contact-form.module#ContactFormModule' },
    { path: 'skills', loadChildren: './main/professional-skills/professional-skills.module#ProfessionalSkillsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}