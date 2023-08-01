import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page.component';
import { ContainerModule } from 'src/app/containers/containers.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ContainerModule
  ],
  exports: [LandingPageComponent],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class LandingPageModule { }
