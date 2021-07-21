import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public  url :string;
  constructor(public httpCliente:HttpClient) {
    //this.url='http://localhost/Universidad.Api/api/courses/';
    this.url=environment.apiUrl+"api/courses/";
  }
  public getAll():Observable<any>{
    return this.httpCliente.get(this.url);
  }
  public save(curso:Course):Observable<any>{
    return this.httpCliente.post(this.url,curso);

  }
  public getById(id:number):Observable<any>{
    return this.httpCliente.get(this.url+id);
  }

  public edit(course:Course):Observable<any>{
    return this.httpCliente.put(this.url+course.CourseID,course);
  }

  public delete(id:number){
    return this.httpCliente.delete(this.url+id);
  }
}
