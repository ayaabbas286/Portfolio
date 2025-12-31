import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { AboutMe } from "../about-me/about-me";
import { Services } from '../services/services';
import { Projects } from "../projects/projects";
import { createTimeline, splitText, stagger } from 'animejs';




@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, AboutMe, Services, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
 ngAfterViewInit(): void {

 const jobTitle = document.getElementById('job-title')

    if (!jobTitle) return;

    const { chars } = splitText(jobTitle, {
      chars: { wrap: 'clip', clone: 'bottom' }
    });

    createTimeline()
      .add(chars, {
        y: '-100%',
        loop: false,
        loopDelay: 350,
        duration:1000,
        ease: 'inOut(2)',
      }, stagger(150, { from: 'center' }));


 }

}
