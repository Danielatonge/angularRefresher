import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.scss'],
})
export class RouteParamsComponent implements OnInit {
  currentId = null;
  currentLesson = null;

  lessons = [
    { id: '1', title: 'Hello Angular' },
    {
      id: '2',
      title: 'Component Fundamentals',
    },
    {
      id: '3',
      title: 'Template Driven Forms',
    },
    {
      id: '4',
      title: 'Angular Services',
    },
    {
      id: '5',
      title: 'Server Communication',
    },
    {
      id: '16',
      title: 'Component Driven Architecture',
    },
    {
      id: '6',
      title: 'Angular Routing',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const currentId = params.get('id')
      if(currentId) {
        this.setCurrentLesson(currentId)
      }
    })
  }

  setCurrentLesson(id) {
    this.currentLesson = this.lessons.find(lesson => lesson.id === id)
  }
}
