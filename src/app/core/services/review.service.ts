import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MOCK_REVIEWS } from '../mock-data/reviews.mock';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  getReviews() {
    return of(
      MOCK_REVIEWS.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    );
  }
}
