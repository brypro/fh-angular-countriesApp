import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryViewComponent } from './pages/country-view/country-view.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryViewComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryViewComponent,
  ],
})
export class CountryModule {}
