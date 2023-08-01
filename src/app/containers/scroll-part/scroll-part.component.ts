import { Component } from '@angular/core';

const CARD_CONTENTS = [
  {
    title: 'New Limit',
    image:
      'https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
  },
  {
    title: 'Surf Internet',
    image:
      'https://images.unsplash.com/photo-1665482652242-07133a92be83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'FocusVision',
    image:
      'https://images.unsplash.com/photo-1548430077-773fa74bda9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
];

@Component({
  selector: 'app-scroll-part',
  templateUrl: './scroll-part.component.html',
  styleUrls: ['./scroll-part.component.sass'],
})
export class ScrollPartComponent {
  public cardContents = CARD_CONTENTS;
}
