import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Repository } from '../../../core/models/repository.model';
import { RepositoriesService } from '../../../core/services/repositories.service';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent implements OnInit {
  repositories: Repository[] = [];
  hoveredRepo: Repository | null = null;

  constructor(private repoService: RepositoriesService, private router: Router) {}

  ngOnInit(): void {
    this.repoService.getRepositories().subscribe((data) => {
      // Adiciona avatar fictício se não vier do backend
      this.repositories = data.map(repo => ({
        ...repo,
        avatarUrl: `/icons/github.png`
      }));
    });
  }

  navigateToPullRequests(repoName: string) {
    this.router.navigate(['pages', 'main', 'repositories', repoName, 'pull-requests']);
  }
}
