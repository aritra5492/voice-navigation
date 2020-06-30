import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './framework/header/header.module';
import { VoiceNavigatorModule } from './framework/voice-navigator/voice-navigator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    VoiceNavigatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
