import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalSkillsComponent } from "./professional-skills.component";

const professionalSkillsRoutes: Routes = [
    { path: '', component: ProfessionalSkillsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(professionalSkillsRoutes)],
    exports: [RouterModule]
})

export class ProfessionalSkillsRoutingModule {}