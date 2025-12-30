import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ScrollToForm } from '../../Services/scroll-to-form';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLink, RouterLinkActive ],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

constructor(private scroll : ScrollToForm) {}

onclickScroll(){this.scroll.scrollToContact()}
}
