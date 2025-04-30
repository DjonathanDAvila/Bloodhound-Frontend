import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor(private repoService: RepositoriesService) {}

  ngOnInit(): void {
    this.repoService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }
}
