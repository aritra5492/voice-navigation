import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeComponent } from './three.component';


@NgModule({
  declarations: [ThreeComponent],
  imports: [
    CommonModule,
    ThreeRoutingModule
  ]
})
export class ThreeModule { }
