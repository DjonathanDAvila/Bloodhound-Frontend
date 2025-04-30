import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MOCK_REPOSITORIES } from '../mock-data/repositories.mock';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor() { }

  getRepositories() {
    return of(MOCK_REPOSITORIES);
  }
}
