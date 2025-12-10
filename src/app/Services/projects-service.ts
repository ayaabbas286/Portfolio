import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjects } from '../iprojects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  DB_URL = "http://localhost:3000/projects";
  constructor(public MyHttp :HttpClient){}
  GetAll(){
  return this.MyHttp.get<IProjects[]>( this.DB_URL)
  }
  GetUserById(id:number){
 return this.MyHttp.get<IProjects>( this.DB_URL+"/"+id)
  }
}
