import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PullRequest } from '../models/pull-request.model';
import { map, of } from 'rxjs';

import { MOCK_PULL_REQUESTS } from '../mock-data/pull-requests.mock';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService {
  // private readonly BASE_URL = 'http://localhost:5021/api/v1/repositories';
  private readonly BASE_URL = 'https://bloodhound-app.azurewebsites.net/api/v1/repositories';

  constructor(private http: HttpClient) { }

  getPullRequestsByRepo(repositoryId: number) {
    // debugger
    return this.http.get<PullRequest[]>(`${this.BASE_URL}/${repositoryId}/pullrequests`, {
      params: {
        page: '1',
        size: '100',
      },
    }).pipe(
      map((repos) => {
        // console.log('Pull-requests retornados da API:', repos);
        return repos;
      })
    );
  }

  //Mock
  // getPullRequestsByRepo(repo: string) {
  //   return of(MOCK_PULL_REQUESTS.filter(pr => pr.repoName === repo))
  // };
}
