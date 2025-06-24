import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Rule } from '../models/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private readonly BASE_URL = 'https://bloodhound-app.azurewebsites.net/api/v1/rules';

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Rule> {
    return this.http.get<Rule>(`${this.BASE_URL}/${id}`);
  }

  create(rule: Rule): Observable<any> {
    return this.http.post(`${this.BASE_URL}/`, rule);
  }

  update(id: string, rule: Rule): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${id}`, rule);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
