import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { routing } from './city.routing';
import { CityLayoutComponent } from './layouts/cityLayout.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [CityLayoutComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  exports: []
})

export class CityModule {}
