import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_RULES } from '../mock-data/rules.mock';
import { Rules } from '../models/rules.model';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor() { }

  getRules(): Observable<Rules[]> {
    return of(MOCK_RULES);
  }
}
