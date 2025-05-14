import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Repository } from '../models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  private readonly BASE_URL = 'http://localhost:5021/api/v1';

  constructor(private http: HttpClient) { }

  getRepositories() {
    return this.http.get<Repository[]>(`${this.BASE_URL}/repositories`, {
      params: {
        page: '0',
        size: '10',
      },
    });
  }

  //Mock
  // getRepositories() {
  //   return of(MOCK_REPOSITORIES);
  // }
}
