import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { SocialBarModule } from 'src/app/shared/social-bar/social-bar.module';
import { CardRoutingModule } from './card.routing.module';
import { AgeTransformPipe } from './../../core/pipes/age-transform.pipe';

@NgModule({
  imports: [
    CommonModule,
    SocialBarModule,
    CardRoutingModule
  ],
  declarations: [
    CardComponent,
    AgeTransformPipe
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
