import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  public id:number=0;
  public course!: Course;
  public showMsg:boolean=false;
  public msg:string | undefined ;
  public type:string | undefined;
  constructor( public courseService:CourseService, private router:Router, private activatedRouter:ActivatedRoute ) {

   }

  ngOnInit(): void {

    this.getById();
  }

  public getById(){
    let param = this.activatedRouter.snapshot.paramMap.get('id');
    this.id = Number(param);
      this.courseService.getById(this.id).subscribe(data=>{this.course=data})
  }
  public delete(){
    console.log("this.course");
    this.courseService.delete(this.course.CourseID).subscribe(data=>{
      this.router.navigate(['/course-list'])
    },error=>{console.log(error);this.showMsg=true;this.msg='Ocurrio un error en el proc.';this.type="danger"});
  }
  ngOnDestroy(){
   this.getById();
  }
}
