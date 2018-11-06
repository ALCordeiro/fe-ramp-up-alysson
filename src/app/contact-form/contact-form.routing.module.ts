import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './contact-form.component';

const contactFormRoutes: Routes = [
    { path: '', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(contactFormRoutes)],
    exports: [RouterModule]
})

export class ContactFormRoutingModule {}