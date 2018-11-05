import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialBarComponent } from './social-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialBarComponent
  ],
  exports: [
    SocialBarComponent
  ]
})
export class SocialBarModule { }
