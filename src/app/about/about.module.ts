import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { SocialBarModule } from 'src/app/shared/social-bar/social-bar.module';
import { AboutRoutingModule } from './about.routing.module';
import { AgeTransformPipe } from '../core/pipes/age-transform.pipe';

@NgModule({
  imports: [
    CommonModule,
    SocialBarModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AgeTransformPipe
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
