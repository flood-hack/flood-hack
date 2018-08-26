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

import {
  BFFService
} from '../shared/services';

import {
  Spatial
} from '../shared/models';

import {
  MatDialog
} from '@angular/material';

import {
  ReportDialogComponent
} from '../report-dialog/report-dialog.component';

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

  public spatials: Array<Spatial>;
  public spatialsSelected: Array<Spatial>;

  public infoWindowPropertyKeys = [
    'Name',
    'Source',
    'COMMENTS',
    'ACCESSTYPE',
    'BASINID',
    'LASTEDITOR',
    'LASTUPDATE',
    'GlobalID'
  ];

  @ViewChild(AgmInfoWindow) infoWindow;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private bffService: BFFService
  ) {}

  public ngOnInit() {
    this.bffService
      .getSpatials()
      .subscribe((spatials: Spatial[]) => {
        this.spatials = spatials;
        this.isLoading = false;
      });

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 14;
        }
      );
    }
  }

  public getStyle() {
    return {
      icon: 'assets/blue-dot.png'
    };
  }

  public spatialsSelectedChange(spatials) {
    spatials.forEach((spatial: Spatial) => {
      if (!spatial.data) {
        this.isLoading = true;
        this.http
          .get(spatial.url)
          .subscribe((data: any) => {
            spatial.data = data;
            this.isLoading = false;
          });
      }
    });
  }

  public clickDataLayerMarker(evt) {
    console.log(evt);
    this.infoWindowProperties = evt.feature.f;
    this.infoWindowLat = evt.latLng.lat();
    this.infoWindowLng = evt.latLng.lng();
    this.infoWindow.open();
  }

  public clickReport() {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      data: this.infoWindowProperties
    });
  }

}
