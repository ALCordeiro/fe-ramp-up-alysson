import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./core/guards/login.guard";

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule', canActivate: [LoginGuard] },
    { path: 'contact', loadChildren: './contact-form/contact-form.module#ContactFormModule', canActivate: [LoginGuard] },
    { path: 'skills', loadChildren: './professional-skills/professional-skills.module#ProfessionalSkillsModule', canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}