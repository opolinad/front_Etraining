import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coursesArr: any;
  idCourse: number;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getCourses().subscribe((res: any) => {
      res.sort((a: any, b: any) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      })
      this.coursesArr = res
      this.idCourse = res[res.length - 1].id;
    });
  }
  selectedCourse: Course = new Course();
  textButton: String = "Crear curso";
  createOrUpdateCourse() {
    if (!this.selectedCourse.Nombre || !this.selectedCourse.Fecha_de_inicio_del_curso || !this.selectedCourse.Fecha_Fin_del_curso) {
      alert("Verifique que ha llenado todos los campos e intente de nuevo")
    } else {
      if (this.selectedCourse.id === 0) {
        this.apiService.addCourse(this.selectedCourse).subscribe();
        this.idCourse++;
        this.coursesArr.push({ ...this.selectedCourse, id: this.idCourse })
      } else {
        this.apiService.updateCourse(this.selectedCourse).subscribe();
      }
      this.selectedCourse = new Course();
    }
  }
  editCourse(course: Course) {
    this.textButton = "Editar curso";
    this.selectedCourse = course;
  }
  deleteCourse() {
    if (confirm("Seguro quiere eliminar el curso " + this.selectedCourse.Nombre + ". Esta acción no se puede deshacer")) {
      this.apiService.deleteCourse(this.selectedCourse).subscribe();
      this.coursesArr.splice(this.coursesArr.indexOf(this.selectedCourse), 1);
      this.selectedCourse = new Course();
      this.textButton = "Crear curso";
    }
  }
}