import {  HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './../../Services/projects-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { IProjects } from '../../iprojects';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule, RouterLink,RouterModule],
  providers:[ProjectsService],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects{
// نحقن السيرفيس
  private proService = inject(ProjectsService);

  // Observable من السيرفيس
 private projects$ = this.proService.GetAll().pipe(
  map((res) => (res ?? []) as IProjects[])   // هنا الـ cast المهم
);
  // تحويل الـ Observable لـ signal

_projects = toSignal(this.projects$, { initialValue: [] as IProjects[] });

}
