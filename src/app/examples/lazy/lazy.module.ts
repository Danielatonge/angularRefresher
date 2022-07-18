import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { LazyComponent } from './lazy.component';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MaterialModule
  ]
})
export class LazyModule { }
