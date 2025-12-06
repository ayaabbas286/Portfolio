import {  HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './../../Services/projects-service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [HttpClientModule, RouterLink,RouterModule],
  providers:[ProjectsService],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{
  projects:any;
constructor(public Pro_Service : ProjectsService){

}
  ngOnInit(): void {
    this.Pro_Service.GetAll().subscribe(
(data)=>{this.projects = data},
(err)=>{ console.log(err);}

    );
  }
}
