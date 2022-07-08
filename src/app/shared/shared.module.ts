import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from "@angular/router";
import { MaterialModule } from 'app/material.module';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  MaterialModule
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule { }
