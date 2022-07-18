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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, HomeComponent, CoursesComponent, CoursesListComponent, CoursesDetailsComponent, ExamplesComponent, AdminComponent, AdminPayrollComponent, AdminVacationComponent, RouteParamsComponent, ProtectedComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
