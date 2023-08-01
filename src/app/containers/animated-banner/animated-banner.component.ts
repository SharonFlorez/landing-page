import { Component } from '@angular/core';

const CARD_CONTENTS = [
  {
    title: 'Brand',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    description: 'Unique brand identities that make a mark.'
  },
  {
    title: 'Product',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: 'Intuitive digital products that people get.'
  },
  {
    title: 'Motion',
    image: 'https://images.unsplash.com/photo-1563544955328-fefce27148fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=361&q=80',
    description: 'Compelling animation that inspires action.'
  },
];

@Component({
  selector: 'app-animated-banner',
  templateUrl: './animated-banner.component.html',
  styleUrls: ['./animated-banner.component.sass']
})
export class AnimatedBannerComponent {
  public cardContents = CARD_CONTENTS;
  public isDefaultImage = true;
  public defaultImage = 'https://assets.website-files.com/6205ecdcec584c56193d6121/624e913ad5a78b549657ae48_services_circle-text.svg';
  public currentImage = this.defaultImage;

  public toggleImage(image: string): void {
    this.currentImage = image ? image : this.defaultImage;
    this.isDefaultImage = !this.isDefaultImage;
  }
}
