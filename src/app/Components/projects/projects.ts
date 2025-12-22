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
    map((res:any) =>  res as IProjects[])

);


_projects = toSignal(this.projects$, { initialValue: [] as IProjects[] });

SafeProjects = computed(() => this._projects() ?? []);

cardInitialCount = signal(8);

visibleCards = computed(() => {
  const list = this.SafeProjects();
  const count = this.cardInitialCount();
  return list.slice(0, Math.min(count, list.length));
});


hasMore = computed(() => this.visibleCards().length > 0 &&
                         this.visibleCards().length < (this.SafeProjects().length));

canSeeLess = computed(() =>
  this.visibleCards().length >= this.SafeProjects().length &&
  this.SafeProjects().length > 8
);

LoadMore(){
  this.cardInitialCount.set(this.cardInitialCount() + 4);
}
SeeLess(){
  this.cardInitialCount.set(8);
}
get debugProjects(): IProjects[] {
  console.log('projects = ', this._projects());
  return this._projects();
}

}
;
