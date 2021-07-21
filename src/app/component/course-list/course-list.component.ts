import { Component, OnInit,OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/domain/course';
import { Subscription } from 'rxjs';


@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit,OnDestroy {
  public courses: Course[] | undefined;
  public subCourses: Subscription = new Subscription;
        constructor(public cursosService:CourseService) {

         }

        ngOnInit(): void {
          this.getAll();
        }

        getAll(){
              this.subCourses=this.cursosService.getAll().subscribe(data => { this.courses=data;});
              console.log(this.cursosService.httpCliente.request);
        }
        ngOnDestroy(){
          this.subCourses.unsubscribe();
        }


}
