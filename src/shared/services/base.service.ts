import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T, M> {

  protected entity!: string;
  protected baseUrl = environment.apiUrl;

  constructor(protected http: HttpClient) { }

  getAll(params: HttpParams | null = null): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}/${this.entity}`
    );
  }

  get(id: number): Observable<M> {
    return this.http.get<M>(
      `${this.baseUrl}/${this.entity}/${id}`
    );
  }

  put(id: number, body: any): Observable<any> {
    return this.http.put(
       `${this.baseUrl}/${this.entity}/${id}`, 
       body
    )
  }

  post(body: M | any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/${this.entity}`,
      body
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/${this.entity}/${id}`
    );
  }
}
