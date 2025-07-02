import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { PullRequest } from '../../../core/models/pull-request.model';
import { PullRequestService } from '../../../core/services/pull-request.service';

@Component({
  selector: 'app-pull-requests',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './pull-requests.component.html',
  styleUrl: './pull-requests.component.scss'
})
export class PullRequestsComponent implements OnInit {
  repoId = 0;
  repoName = '';
  displayedColumns = ['number', 'branch', 'status'];
  dataSource = new MatTableDataSource<PullRequest>();

  constructor(
    private route: ActivatedRoute,
    private pullRequestService: PullRequestService,
    private http: HttpClient
  ) { }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('repo');
    const nameParam = this.route.snapshot.paramMap.get('name');
    this.repoId = idParam ? +idParam : 0;
    this.repoName = nameParam || '';

    if (this.repoId > 0) {
      this.pullRequestService.getPullRequestsByRepo(this.repoId)
        .subscribe(data => {
          this.dataSource.data = data;

          // ⚠️ Espera um tick para garantir que o ViewChild e a tabela estejam prontos
          setTimeout(() => {
            if (this.sort) {
              this.dataSource.sort = this.sort;
              this.sort.active = 'number';
              this.sort.direction = 'desc';
              this.sort.sortChange.emit();
            } else {
              console.warn('Sort ainda não disponível!');
            }
          });
        });
    }
  }
}
