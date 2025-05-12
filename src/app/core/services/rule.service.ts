import { Injectable } from '@angular/core';
import { Rule } from '../models/rule.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() { }

  private rules: Rule[] = [
    {
      id: '1',
      name: 'DRY',
      description: 'Follow DRY principles.',
      repositories: ['repo1'],
      createdBy: 'cairo.andrade777@gmail.com',
      createdAt: new Date('2025-04-23'),
      updatedAt: new Date('2025-04-23'),
    },
  ];

  getById(id: string) {
    return of(this.rules.find(r => r.id === id) || null);
  }

  create(rule: Rule) {
    rule.id = crypto.randomUUID();
    rule.createdAt = new Date();
    this.rules.push(rule);
    return of(rule);
  }

  update(id: string, data: Partial<Rule>) {
    const rule = this.rules.find(r => r.id === id);
    if (rule) {
      Object.assign(rule, data);
      rule.updatedAt = new Date();
    }
    return of(rule);
  }
}
