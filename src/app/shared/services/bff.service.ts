import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AddEditToolRequest,
  FilterOptions,
  Tool,
  Social,
  Spatial
} from '../models';

@Injectable()
export class BFFService {
  private readonly baseUrl: string = 'https://flood-hack-bff.azurewebsites.net/api';
  // private readonly baseUrl: string = 'https://localhost:8003/api';

  constructor(private http: HttpClient) { }

  public addTool(addTool: AddEditToolRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/tools`, addTool);
  }

  public getTool(id: string): Observable<Tool> {
    return this.http.get<Tool>(`${this.baseUrl}/tools/${id}`);
  }

  public search(filterOptions: FilterOptions): Observable<Tool[]> {
    const params = this.generateFilterParams(filterOptions);
    return this.http.get<Tool[]>(`${this.baseUrl}/tools/search`, { params });
  }

  public updateTool(id: string, editTool: AddEditToolRequest): Observable<number> {
    return this.http
      .patch(`${this.baseUrl}/tools/${id}`, editTool, { observe: 'response' })
      .pipe(
        map((response: Response) => {
          return response.status;
        })
      );
  }

  public getSocial(): Observable<Social[]> {
    return this.http.get<Social[]>(`${this.baseUrl}/social?q=%23chsFloodsHack`);
  }

  public getSpatials(): Observable<Spatial[]> {
    // return this.http.get<Spatial[]>(`${this.baseUrl}/spatials`);
    return of([
      new Spatial({
        name: 'Drains',
        url: 'assets/SW_Inlets.geojson'
      }),
      new Spatial({
        name: 'Basins',
        url: 'https://opendata.arcgis.com/datasets/a6c40fca30bf43eab66b4f71a1999feb_17.geojson'
      })
    ]);
  }

  private generateFilterParams(filterOptions: FilterOptions): HttpParams {
    return Object.entries(filterOptions).reduce((prev: HttpParams, [key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        value.map(val => {
          prev = prev.append(key, val.toString());
        });
      } else if (typeof value === 'string') {
        prev = prev.set(key, value);
      }
      return prev;
    }, new HttpParams());
  }
}
