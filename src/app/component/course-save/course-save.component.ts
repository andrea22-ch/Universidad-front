import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'course-save',
  templateUrl: './course-save.component.html',
  styleUrls: ['./course-save.component.css']
})
export class CourseSaveComponent implements OnInit {
  public course:Course= new Course(0,'',0);
  public showMsg:boolean=false;
  public msg:string | undefined ;
  public type:string | undefined;
  constructor( public courseService:CourseService, private router:Router ) {

   }

  ngOnInit(): void {


  }
  public save(){
    console.log("this.course");
    this.courseService.save(this.course).subscribe(data=>{
      this.router.navigate(['/course-list'])
    },error=>{console.log(error);this.showMsg=true;this.msg='Ocurrio un error en el proc.';this.type="danger"});
  }

}
