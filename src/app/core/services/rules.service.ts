import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_RULES } from '../mock-data/rules.mock';
import { RuleListItem } from '../models/RuleListItem.model';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor() { }

  getRules(): Observable<RuleListItem[]> {
    return of(MOCK_RULES);
  }
}
