import { Component, OnInit, HostListener } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  constructor() {}
  collapseNavbar: string = '';
  ngOnInit(): void {}
  
  //EVENTO PARA DETERMINAR EL HIGH POR MEDIO DEL SCROLL 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 500) {
      this.collapseNavbar = 'top-nav-collapse';
    } else {
      this.collapseNavbar = '';
    }
  }
}
