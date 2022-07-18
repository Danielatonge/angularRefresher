import { Component, OnInit } from '@angular/core';

import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons$;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.getLessons();
  }

  getLessons() {
    this.lessonsService
    .all()
    .subscribe(result => this.courseLessons$ = result);
  }
}
