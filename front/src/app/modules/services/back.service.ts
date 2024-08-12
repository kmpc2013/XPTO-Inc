import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { IRequest } from '../interface/IRequest';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  private apiUrl = '/requests';

  constructor(private http: HttpClient) { }

  public getAllResquests(): Observable<IRequest[]> {
    return this.http
      .get<IRequest[]>(`${this.apiUrl}`)
      .pipe(retry(2));
  }

  public addRequest(request: IRequest): Observable<any> {
    return this.http
      .post<IRequest[]>(`${this.apiUrl}`,request)
      .pipe(retry(2));
  }
}
