import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PullRequest } from '../../../core/models/pull-request.model';
import { PullRequestService } from '../../../core/services/pull-request.service';

@Component({
  selector: 'app-pull-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pull-requests.component.html',
  styleUrl: './pull-requests.component.scss'
})
export class PullRequestsComponent implements OnInit {
  pullRequests: PullRequest[] = [];
  repoName = '';

  constructor(
    private route: ActivatedRoute,
    private pullRequestService: PullRequestService
  ) { }

  ngOnInit() {
    this.repoName = this.route.snapshot.paramMap.get('repo') || '';
    this.pullRequestService.getPullRequestsByRepo(this.repoName)
      .subscribe(data => this.pullRequests = data);
  }
}
