import {
  Component,
  OnInit
} from '@angular/core';

import {
  AgmKmlLayer,
  KmlLayerManager
} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 32.769258;
  public lng = -79.929067;
  public zoom = 10;

  constructor(
    private kmlLayerManager: KmlLayerManager
  ) {}

  public ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 12;
        }
      );
    }

    const layer = new AgmKmlLayer(this.kmlLayerManager);
    layer.url = 'assets/example.kml';

    this.kmlLayerManager.addKmlLayer(layer);
  }

}
