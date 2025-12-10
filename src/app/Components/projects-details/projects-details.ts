import { Projects } from './../projects/projects';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectsService } from '../../Services/projects-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProjects } from '../../iprojects';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
providers:[ProjectsService],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',

})
export class ProjectsDetails{
private route = inject(ActivatedRoute);
  private proService = inject(ProjectsService);

  private project$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.proService.GetUserById(id)) // يرجع IProjects واحد
  );

  project = toSignal<IProjects | null>(this.project$, { initialValue: null });
}

