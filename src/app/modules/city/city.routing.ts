import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityLayoutComponent } from './layouts/cityLayout.component';


const routes: Routes = [
    { path: '', component: CityLayoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);