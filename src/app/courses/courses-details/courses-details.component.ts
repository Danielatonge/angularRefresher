import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  title: string;
  selectedCourse: Course;

  @Output() save = new EventEmitter();
  @Output() reset = new EventEmitter();

  @Input() set course(value) {
    if (!value) return;
    this.selectedCourse = Object.assign({}, value)
    this.title = value.title
  }

}
