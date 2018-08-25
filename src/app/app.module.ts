import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import {
  AgmCoreModule,
  DataLayerManager,
  GoogleMapsAPIWrapper,
  InfoWindowManager,
  KmlLayerManager,
  MarkerManager
} from '@agm/core';

import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVMNc36p4Gj64WfbJXdBBXwm5Kg0nCZVQ'
    })
  ],
  providers: [
    DataLayerManager,
    GoogleMapsAPIWrapper,
    InfoWindowManager,
    KmlLayerManager,
    MarkerManager
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
