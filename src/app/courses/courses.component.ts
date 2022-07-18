import { Component, OnInit } from '@angular/core';

import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

let emptyCourse: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course = emptyCourse;
  courses$;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.all()
    .subscribe((result) => (this.courses$ = result));
  }

  selectCourse(course): void {
    this.selectedCourse = course;
  }

  deleteCourse(courseId): void {
     this.coursesService
       .delete(courseId)
       .subscribe(() => this.getCourses());
  }

  saveCourse(course): void {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService
    .create(course)
    .subscribe(() => this.getCourses());
  }

  updateCourse(course) {
    this.coursesService
    .update(course.id, course)
    .subscribe(() => this.getCourses());
  }

  reset(): void {
    this.selectCourse({ ...emptyCourse });
  }
}
