import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { ExamplesComponent } from './examples/examples.component';
import { AdminComponent } from './examples/admin/admin.component';
import { AdminPayrollComponent } from './examples/admin/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/admin/admin-vacation/admin-vacation.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { ProtectedComponent } from './examples/protected/protected.component';
import { LoginComponent } from './login/login.component';
import { DynamicComponent } from './examples/dynamic/dynamic.component';
import { CircleComponent } from './examples/dynamic/circle/circle.component';
import { SquareComponent } from './examples/dynamic/square/square.component';
import { TriangleComponent } from './examples/dynamic/triangle/triangle.component';
import { CustomInputComponent } from './examples/custom-input/custom-input.component';
import { CustomControlComponent } from './examples/custom-input/custom-control/custom-control.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, HomeComponent, CoursesComponent, CoursesListComponent, CoursesDetailsComponent, ExamplesComponent, AdminComponent, AdminPayrollComponent, AdminVacationComponent, RouteParamsComponent, ProtectedComponent, LoginComponent, DynamicComponent, CircleComponent, SquareComponent, TriangleComponent, CustomInputComponent, CustomControlComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
