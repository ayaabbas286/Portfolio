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
    map((res:any) => res.projects as IProjects[] )

    // هنا الـ cast المهم
);


_projects = toSignal(this.projects$, { initialValue: [] as IProjects[] });

cardInitialCount = signal(6);
visibleCards = computed(() => {
  const list = this._projects() ?? [];   // fallback
  const count = this.cardInitialCount();
  if (!Array.isArray(list)) return [];
  return list.slice(0, Math.min(count, list.length));
});



hasMore = computed(() => this.visibleCards().length > 0 &&
                         this.visibleCards().length < (this._projects()?.length ?? 0));

canSeeLess = computed(() =>
  this.visibleCards().length >= (this._projects()?.length ?? 0) &&
  (this._projects()?.length ?? 0) > 6
);

LoadMore(){
  this.cardInitialCount.set(this.cardInitialCount() + 6);
}
SeeLess(){
  this.cardInitialCount.set(6);
}
get debugProjects(): IProjects[] {
  console.log('projects = ', this._projects());
  return this._projects();
}

}
;
