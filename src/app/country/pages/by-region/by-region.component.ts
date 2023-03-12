import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }

    this.activeRegion = region;

    //TODO: llamar el servicio
  }
}
