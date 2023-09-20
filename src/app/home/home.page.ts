import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  
  images = [
    { src: '../../assets/images/MEAN-STACK.jpg', alt: 'First slide' },
    { src: '../../assets/images/CODING.jpg', alt: 'Second slide' },
    { src:'../../assets/images/ANGULAR.jpg', alt: 'Third slide' }
  ];

    // Set the desired image height and width here
    imageHeight = 75; // Specify the height in pixels
    imageWidth = 400; // Specify the width in pixels

  activeIndex = 0;

  ngOnInit() {
    // Automatically start sliding after 4 seconds
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 4000); // 4 seconds
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  cloudURL(){
    window.location.href = 'https://kryptostech.com/cloud-transformation/';
  }
}
