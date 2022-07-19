import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';

import { CoursesComponent } from './courses/courses.component';
import { AdminPayrollComponent } from './examples/admin/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/admin/admin-vacation/admin-vacation.component';
import { AdminComponent } from './examples/admin/admin.component';
import { CustomInputComponent } from './examples/custom-input/custom-input.component';
import { DynamicComponent } from './examples/dynamic/dynamic.component';
import { ExamplesComponent } from './examples/examples.component';
import { ProtectedComponent } from './examples/protected/protected.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      {
        path: 'child',
        component: AdminComponent,
        children: [
          { path: 'payroll', component: AdminPayrollComponent },
          { path: 'vacation', component: AdminVacationComponent },
        ],
      },
      {
        path: 'params',
        component: RouteParamsComponent,
      },
      {
        path: 'params/:id',
        component: RouteParamsComponent,
      },
      {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lazy',
        loadChildren: () =>
          import('./examples/lazy/lazy.module').then((m) => m.LazyModule),
      },
      { path: 'create', component: DynamicComponent },
      { path: 'input', component: CustomInputComponent },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
