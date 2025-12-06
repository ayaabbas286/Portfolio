import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { ProjectsService } from '../../Services/projects-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-details',
  imports: [HttpClientModule,CommonModule],
providers:[ProjectsService],
  templateUrl: './projects-details.html',
  styleUrl: './projects-details.css',

})
export class ProjectsDetails implements OnInit{
  id = 0;
  projects = signal<any>(null);
constructor(public pro_service : ProjectsService , MyRoute:ActivatedRoute){
this.id = MyRoute.snapshot.params["id"]
}
  ngOnInit(): void {
this.pro_service.GetUserById(this.id).subscribe(
  (data)=>{  this.projects.set(data);
  console.log(data);},
  (err)=>{console.log(err);}
)
}
}
