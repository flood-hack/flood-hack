import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  AgmCoreModule,
  DataLayerManager,
  GoogleMapsAPIWrapper,
  InfoWindowManager,
  KmlLayerManager,
  MarkerManager
} from '@agm/core';

import { MapComponent } from './map/map.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ToolsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
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
