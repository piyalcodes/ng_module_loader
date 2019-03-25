import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'cities', loadChildren: './modules/city/city.module#CityModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);