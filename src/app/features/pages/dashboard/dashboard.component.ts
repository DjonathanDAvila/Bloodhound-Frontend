import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Review } from '../../../core/models/review.model';
import { ReviewService } from '../../../core/services/review.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(data => {
      this.reviews = data;
    });
  }

}
