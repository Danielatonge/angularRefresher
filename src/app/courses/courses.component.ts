import { Component, OnInit } from '@angular/core';

import { Course } from '../common/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course = null;
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: '2',
      title: 'New Angular State Management',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 5,
      favorite: false,
    },
  ];

  constructor() {}

  selectCourse(course):void {
    this.selectedCourse = course;
  }

  deleteCourse(course):void {
    console.log(course.id)
  }

  ngOnInit(): void {}
}
