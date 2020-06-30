import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoiceNavigatorComponent } from './voice-navigator.component';



@NgModule({
  declarations: [VoiceNavigatorComponent],
  imports: [
    CommonModule
  ],
  exports: [VoiceNavigatorComponent]
})
export class VoiceNavigatorModule { }
