import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

import { Rules } from '../../../core/models/rules.model';
import { RulesService } from '../../../core/services/rules.service';

@Component({
  selector: 'app-rules-list',
  standalone: true,
  imports: [RouterLink, CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './rules-list.component.html',
  styleUrl: './rules-list.component.scss'
})
export class RulesListComponent implements OnInit {
  rules: Rules[] = [];
  displayedColumns = ['name', 'description', 'reposCount', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt'];

  constructor(private rulesService: RulesService, private router: Router) { }

  ngOnInit(): void {
    this.rulesService.getRules().subscribe(data => this.rules = data);
  }

  onEdit(id: string) {
    this.router.navigate(['pages', 'main', 'rules', 'create']);

  }
}
