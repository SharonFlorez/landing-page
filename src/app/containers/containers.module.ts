import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from 'src/app/containers/header/header.component';
import { FormComponent } from './form/form.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AnimatedBannerComponent } from './animated-banner/animated-banner.component';
import { ScrollPartComponent } from './scroll-part/scroll-part.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
    AnimatedBannerComponent,
    ScrollPartComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
    AnimatedBannerComponent,
    ScrollPartComponent,
  ],
  providers: [],
  bootstrap: [HeaderComponent],
})
export class ContainerModule {}
