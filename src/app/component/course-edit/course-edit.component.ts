import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit,OnDestroy {

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
  public edit(){
    console.log("this.course");
    this.courseService.edit(this.course).subscribe(data=>{
      this.router.navigate(['/course-list'])
    },error=>{console.log(error);this.showMsg=true;this.msg='Ocurrio un error en el proc.';this.type="danger"});
  }
  ngOnDestroy(){
   this.getById();
  }

}
