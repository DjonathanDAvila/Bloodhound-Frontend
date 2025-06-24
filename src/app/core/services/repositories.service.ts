import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Repository } from '../models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  private readonly BASE_URL = 'https://bloodhound-app.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) { }

  getRepositories() {
    return this.http.get<Repository[]>(`${this.BASE_URL}/repositories`, {
      params: {
        page: '1',
        size: '10',
      },
    });
  }

  //Mock
  // getRepositories() {
  //   return of(MOCK_REPOSITORIES);
  // }
}
