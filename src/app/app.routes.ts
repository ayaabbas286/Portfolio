import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Home } from './Components/home/home';
import { Error } from './Components/error/error';

export const routes: Routes = [
  {path:"",component:Home},
  {path:"home",component:Home},
  {path:"navbar",component:Navbar},
  {path:"footer",component:Footer},
  {path:"**",component:Error}
];
