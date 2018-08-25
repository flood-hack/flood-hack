import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  AgmKmlLayer,
  AgmDataLayer,
  AgmInfoWindow,
  DataLayerManager,
  InfoWindowManager,
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
  public geoJsonObject: any;
  public infoWindow: AgmInfoWindow;

  constructor(
    private http: HttpClient,
    private dataLayerManager: DataLayerManager,
    private infoWindowManager: InfoWindowManager,
    private kmlLayerManager: KmlLayerManager,
    private elementRef: ElementRef
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

    // this.infoWindow = new AgmInfoWindow(
    //   this.infoWindowManager,
    //   this.elementRef
    // );
    // this.infoWindowManager.addInfoWindow(this.infoWindow);

    this.http
      .get('assets/SW_Inlets.geojson')
      .subscribe((data: any) => {
        this.geoJsonObject = data;
      });



    // const layer = new AgmKmlLayer(this.kmlLayerManager);
    // layer.url = 'assets/example.kml';

    // this.kmlLayerManager.addKmlLayer(layer);
  }

  public styleFunc(feature) {
    return {
      icon: 'assets/blue-dot.png'
    };
    // console.log(feature);
    // // get level - 0/1
    // var level = feature.getProperty('level');
    // var color = 'green';
    // // only show level one features
    // var visibility = level == 1 ? true : false;
    // return {
    //   // icon for point geometry(in this case - doors)
    //   // icon: 'assets/images/door.png',
    //   // set fill color for polygon features
    //   fillColor: color,
    //   // stroke color for polygons
    //   strokeColor: color,
    //   strokeWeight: 1,
    //   // make layer 1 features visible
    //   visible: visibility
    // };
  }

  public clicked(evt) {
    // this.infoWindow.content = 'HEY';
    console.log(evt);
  }

}
