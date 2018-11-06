import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactFormRoutingModule
  ],
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
