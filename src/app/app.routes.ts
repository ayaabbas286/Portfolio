import { ContactUs } from './Components/contact-us/contact-us';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Home } from './Components/home/home';
import { Error } from './Components/error/error';
import { Services } from './Components/services/services';
import { AboutMe } from './Components/about-me/about-me';
import { OurWork } from './Components/our-work/our-work';

export const routes: Routes = [
{ path: "", redirectTo: "home", pathMatch: "full" },
  {path:"home",component:Home},
  {path:"navbar",component:Navbar},
    {path:"services",component:Services},
  {path:"about-me",component:AboutMe},
    {path:"contact-us",component:ContactUs},
  {path:"our-work",component:OurWork},
  {path:"footer",component:Footer},
  {path:"**",component:Error}
];
