import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SidebarModule
  ]
})
export class SharedModule { }
