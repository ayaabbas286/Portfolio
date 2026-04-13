import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from './Components/footer/footer';
import { ContactUs } from './Components/contact-us/contact-us';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ContactUs],
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
}
