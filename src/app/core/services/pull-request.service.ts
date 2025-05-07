import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MOCK_PULL_REQUESTS } from '../mock-data/pull-requests.mock';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService {

  constructor() { }
  getPullRequestsByRepo(repo: string) {
    return of(MOCK_PULL_REQUESTS.filter(pr => pr.repoName === repo));
  }
}
