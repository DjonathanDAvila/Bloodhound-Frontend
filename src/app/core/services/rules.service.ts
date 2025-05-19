import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RuleListItem } from '../models/rule-list-item.model';


@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private readonly BASE_URL = 'http://localhost:5021/api/v1/rules';

  constructor(private http: HttpClient) { }

  getRules(): Observable<RuleListItem[]> {
  return this.http.get<RuleListItem[]>(this.BASE_URL).pipe(
    tap((rules) => console.log('Regras carregadas Update:', rules))
  );
}

  getRuleCount(): Observable<number> {
    return this.http.get<number>(`${this.BASE_URL}/count`);
  }

  deleteRule(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

  // getRules(): Observable<RuleListItem[]> {
  //   return of(MOCK_RULES);
  // }
}
