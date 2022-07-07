import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from "@angular/router";

const MODULES: any[] = [
  CommonModule,
  RouterModule
]

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule { }
