import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from './Components/footer/footer';
import { CommonModule } from '@angular/common';
import { ContactUs } from './Components/contact-us/contact-us';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule,ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });

  }
  protected readonly title = signal('Portfolio');
 showTopButton = false;
  showBottomButton = true;          // start visible

  private step = 500; // px each click

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || window.pageYOffset || 0;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    // show top button after 500px
    this.showTopButton = y > this.step;

    // hide bottom button when at (or very near) bottom
    const atBottom = y + winHeight >= docHeight - 10;
    this.showBottomButton = !atBottom;
  }

  scrollUp() {
    const y = window.scrollY || window.pageYOffset || 0;

    if (y <= 700) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
     else {
      window.scrollBy({ top: -this.step, left: 0, behavior: 'smooth' });
    }
  }

  scrollDown() {
    window.scrollBy({ top: this.step, left: 0, behavior: 'smooth' });
  }
}
