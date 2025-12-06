import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { AboutMe } from "../about-me/about-me";
import { Services } from '../services/services';
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, AboutMe, Services, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
