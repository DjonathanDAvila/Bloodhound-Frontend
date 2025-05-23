import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  repoId = 0;
  repoName = ""

  constructor(
    private route: ActivatedRoute,
    private pullRequestService: PullRequestService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('repo');
    const nameParam = this.route.snapshot.paramMap.get('name');
    this.repoId = idParam ? +idParam : 0;
    this.repoName = nameParam || '';

    if (this.repoId > 0) {
      this.pullRequestService.getPullRequestsByRepo(this.repoId)
        .subscribe(data => this.pullRequests = data);
    }
    console.log(this.pullRequests)
  }
}
