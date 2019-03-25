import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './dashboard.routing';
import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class DashboardModule { }
