import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  public isMobile = true;
  public isDesktop = true;

  @HostListener('window:resize', [])
  updateIsMobile() {
    const width = document.documentElement.clientWidth || window.innerWidth;
    const breakpoint = 768;
    const desktop = 1440;

    this.isMobile = width < breakpoint;
    this.isDesktop = width === desktop;
  }
}
