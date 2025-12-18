import {  HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './../../Services/projects-service';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { IProjects } from '../../iprojects';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule, RouterLink,RouterModule,CommonModule],
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

_projects = toSignal(this.projects$, { initialValue: [] as IProjects[] });
cardInitialCount = signal(6);
visibleCards = computed(()=> this._projects().slice(0, this.cardInitialCount()) )
LoadMore(){
  this.cardInitialCount.set(this.cardInitialCount() + 6);
}
SeeLess(){
  this.cardInitialCount.set(6);
}
}
;
