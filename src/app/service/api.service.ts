import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clientHTTP: HttpClient) { }
  addCourse(course: Course): Observable<Course>{
    let { Nombre:nombre, Fecha_de_inicio_del_curso:inicio, Fecha_Fin_del_curso:fin }: { Nombre: string; Fecha_de_inicio_del_curso: string; Fecha_Fin_del_curso: string } = course;
    return this.clientHTTP.post<Course>("http://localhost:8000/api/courses", {nombre, inicio, fin});
  }
  getCourses() {
    return this.clientHTTP.get("http://localhost:8000/api/courses");
  }
  updateCourse(course: Course): Observable<Course> {
    let { Nombre: nombre, Fecha_de_inicio_del_curso: inicio, Fecha_Fin_del_curso: fin }: { Nombre: string; Fecha_de_inicio_del_curso: string; Fecha_Fin_del_curso: string } = course;
    return this.clientHTTP.put<Course>("http://localhost:8000/api/courses/"+course.id, {nombre, inicio, fin})
  }
  deleteCourse(course: Course) {
    console.log("Entra", course.id);

    return this.clientHTTP.delete("http://localhost:8000/api/courses/" + course.id);
  }
}
