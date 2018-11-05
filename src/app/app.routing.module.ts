import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'contact', loadChildren: './contact-form/contact-form.module#ContactFormModule' },
    { path: 'skills', loadChildren: './professional-skills/professional-skills.module#ProfessionalSkillsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}