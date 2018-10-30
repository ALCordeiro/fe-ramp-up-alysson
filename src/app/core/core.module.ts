import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsService } from './services/informations/informations.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  // declarations: [
  //   InformationsService
  // ],
  // exports: [ 
  //   InformationsService
  // ],
  providers: [InformationsService]
})
export class CoreModule { }
