import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';


const routes: Routes = [
    { path: '', component: DashboardLayoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);