import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { IRequest } from '../interface/IRequest';
import { IBranche } from '../interface/IBranche';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  private requestsUrl = '/api/requests';
  private branchesUrl = '/api/branches';


  constructor(private http: HttpClient) { }

  public getAllResquests(): Observable<IRequest[]> {
    return this.http
      .get<IRequest[]>(`${this.requestsUrl}`)
      .pipe(retry(2));
  }

  public addRequest(request: IRequest): Observable<any> {
    return this.http
      .post<IRequest[]>(`${this.requestsUrl}`,request)
      .pipe(retry(2));
  }

  public getAllBranches(): Observable<IBranche[]> {
    return this.http
      .get<IBranche[]>(`${this.branchesUrl}`)
      .pipe(retry(2));
  }

  public addBranches(branche: IBranche): Observable<any> {
    return this.http
      .post<IBranche[]>(`${this.branchesUrl}`,branche)
      .pipe(retry(2));
  }
  
}
