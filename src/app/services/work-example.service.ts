import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkExampleService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router,
  ) {}

  create(workExample) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(`${this.baseUrl}/work-examples`, workExample, {headers: headers})
    .map(res => res.json());
  }

  delete(id) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.delete(`${this.baseUrl}/work-examples/${id}`, {headers: headers})
    .map(res => res);
  }

  getAll() {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(`${this.baseUrl}/work-examples`, {headers: headers})
    .map(res => res.json());
  }

  get(id) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(`${this.baseUrl}/work-examples/${id}`, {headers: headers})
    .map(res => res.json());
  }

  update(workExample) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`); ;
    return this.http.put(`${this.baseUrl}/work-examples/${workExample._id}`, workExample, {headers: headers})
    .map(res => res.json());
  }
}
