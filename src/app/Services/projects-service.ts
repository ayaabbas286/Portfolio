import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjects } from '../iprojects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  DB_URL = "https://ayaabbas286.github.io/Portfolio/Data/data.json";
  constructor(public MyHttp :HttpClient){}
  GetAll(){
  return this.MyHttp.get<IProjects[]>( this.DB_URL)
  }
  GetUserById(id:number){
 return this.MyHttp.get<IProjects>( this.DB_URL+"/"+id)
  }
}
