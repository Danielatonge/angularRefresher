import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CoursesService } from '../common/services/courses.service';
import { CoursesComponent } from './courses.component';

const noop = () => of(true);

const mockCoursesService = {
  all: noop,
  delete: noop,
  create: noop,
  update: noop,
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let service: CoursesService;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [
        { provide: CoursesService, 
          useValue:mockCoursesService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CoursesService)
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly delegate get-all responsibility', () => {
    // Arrange
    spyOn(service, 'all').and.callThrough()

    // Act
    component.getCourses()

    // Assert
    expect(service.all).toHaveBeenCalled()
  });
});
