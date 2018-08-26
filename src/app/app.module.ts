import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatGridListModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

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
import { AddEditToolComponent } from './add-edit-tool/add-edit-tool.component';

import { BFFService } from './shared/services/bff.service';
import { SearchComponent } from './search/search.component';


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
    HomeComponent,
    AddEditToolComponent,
    SearchComponent
  ],
  entryComponents: [
    AddEditToolComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVMNc36p4Gj64WfbJXdBBXwm5Kg0nCZVQ'
    })
  ],
  providers: [
    BFFService,
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
