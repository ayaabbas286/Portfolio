import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjects } from '../iprojects';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  DB_URL = "https://ayaabbas286.github.io/browser/Data/data.json";
  constructor(public MyHttp :HttpClient){}
  GetAll(){
  return this.MyHttp.get<{projects:IProjects[]}>( this.DB_URL).pipe(
    map(res => res.projects)
  )
  }
GetUserById(id: number) {
  return this.GetAll().pipe(
    map(projects => projects.find(p => p.id === id)!)
  );
}
}
