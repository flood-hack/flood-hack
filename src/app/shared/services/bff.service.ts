import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddEditToolRequest, IdProvider, Tool } from '../models';

@Injectable()
export class BFFService {
  private readonly baseUrl: string = 'https://flood-hack-bff.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  public addTool(addTool: AddEditToolRequest): Observable<IdProvider> {
    return this.http.post<IdProvider>(`${this.baseUrl}/tools}`, addTool);
  }

  public getTool(id: string): Observable<Tool> {
    return this.http.get<Tool>(`${this.baseUrl}/tools/${id}`);
  }

  // public getTools(filterOptions: any): Observable<Tool[]> {

  // }

  public updateTool(id: string, editTool: AddEditToolRequest): Observable<number> {
    return this.http
      .patch(`${this.baseUrl}/tools/${id}`, editTool, { observe: 'response' })
      .pipe(
        map((response: Response) => {
          return response.status;
        })
      );
  }
}
