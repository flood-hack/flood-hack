import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  AgmInfoWindow
} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

  // CHARLESTON
  public lat = 32.769258;
  public lng = -79.929067;

  public zoom = 10;
  public geoJsonObject: any;

  public infoWindowProperties: any;
  public infoWindowLat = this.lat;
  public infoWindowLng = this.lng;
  public isLoading = true;

  public infoWindowPropertyKeys = [
    'COMMENTS',
    'ACCESSTYPE',
    'BASINID',
    'LASTEDITOR',
    'LASTUPDATE',
    'GlobalID'
  ];

  @ViewChild(AgmInfoWindow) infoWindow;

  constructor(
    private http: HttpClient
  ) {}

  public ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 14;
        }
      );
    }

    this.http
      .get('assets/SW_Inlets.geojson')
      .subscribe((data: any) => {
        this.geoJsonObject = data;
        this.isLoading = false;
      });
  }

  public getStyle() {
    return {
      icon: 'assets/blue-dot.png'
    };
  }

  public clickDataLayerMarker(evt) {
    this.infoWindowProperties = evt.feature.f;
    this.infoWindowLat = evt.latLng.lat();
    this.infoWindowLng = evt.latLng.lng();
    this.infoWindow.open();
  }

  public clickReport() {
    console.log(this.infoWindowProperties);
  }

}
