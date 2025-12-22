import { HttpClientModule } from '@angular/common/http';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../Services/projects-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProjects } from '../../iprojects';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterModule],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
providers:[ProjectsService],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',

})
export class ProjectsDetails {
private route = inject(ActivatedRoute);
  private proService = inject(ProjectsService);

  private project$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.proService.GetUserById(id)) // يرجع IProjects واحد
  );

  project = toSignal<IProjects | null>(this.project$, { initialValue: null });
allProjects = toSignal(this.proService.GetAll().pipe(
  map(pro => pro as IProjects[])
), { initialValue: [] });
relatedProjects = computed(() => this.allProjects().filter(p => p.category === this.project()?.category && p.id !== this.project()?.id).slice(0,4));

@ViewChild('mainSwiper') mainSwiper!: ElementRef<any>;
@ViewChild('thumbSwiper') thumbSwiper!: ElementRef<any>;


  private swiperInitialized = false;

constructor() {
  effect(() => {
    const p = this.project();
    if (!p) return;

    queueMicrotask(() => this.initOrUpdateSwiper());

  });
}

private initOrUpdateSwiper() {
  const mainEl = this.mainSwiper?.nativeElement;
  const thumbEl = this.thumbSwiper?.nativeElement;
  if (!mainEl || !thumbEl) return;

  Object.assign(thumbEl, {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,

  });

  Object.assign(mainEl, {
    spaceBetween: 10,
    navigation: true,
    loop: true,
    thumbs: { swiper: thumbEl },
  });

  if (!this.swiperInitialized) {
    thumbEl.initialize();
    mainEl.initialize();
    this.swiperInitialized = true;
    return;
  }

  thumbEl.swiper?.update();
  mainEl.swiper?.update();
}

}

