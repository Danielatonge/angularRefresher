import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Refresher'`, () => {
    expect(app.title).toEqual('Angular Refresher');
  });

  it('should render an updated title', () => {
    // Arrange
    const newTitle = 'Angular'
    const titleElmt = de.query(By.css('.title'));

    // Act
    app.title = newTitle;
    fixture.detectChanges()

    // Assert
    expect(titleElmt.nativeElement.innerText.trim()).toBe('Angular');
  });
});
