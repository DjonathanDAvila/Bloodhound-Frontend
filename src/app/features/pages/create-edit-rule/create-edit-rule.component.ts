import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';

import { Repository } from '../../../core/models/repository.model';
import { Rule } from '../../../core/models/rule.model';
import { RepositoriesService } from '../../../core/services/repositories.service';
import { RuleService } from '../../../core/services/rule.service';
import { RulesService } from '../../../core/services/rules.service';



@Component({
  selector: 'app-create-edit-rule',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './create-edit-rule.component.html',
  styleUrl: './create-edit-rule.component.scss'
})
export class CreateEditRuleComponent implements OnInit {
  repositories: Repository[] = [];
  form: FormGroup;
  isEditMode = false;
  ruleId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ruleService: RuleService,
    private rulesService: RulesService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private repositoriesService: RepositoriesService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRepositories();

    this.ruleId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.ruleId;

    if (this.isEditMode && this.ruleId) {
      this.ruleService.getById(this.ruleId).subscribe((rule: Rule | null) => {
        if (!rule) return;

        this.form.patchValue({
          name: rule.name,
          description: rule.description
        });

        this.repositories.forEach(repo => {
          repo.selected = rule.repositories?.includes(repo.name) ?? false;
        });
        this.cdr.detectChanges();
      });
    }
  }

  loadRepositories(): void {
    this.repositoriesService.getRepositories().subscribe((repos: Repository[]) => {
      this.repositories = repos.map(repo => ({ ...repo, selected: false }));
      this.cdr.detectChanges();
    });

  }

  toggleSelectAll(event: any) {
    const checked = event.checked ?? event.target?.checked;
    this.repositories.forEach(r => r.selected = checked);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const selectedRepos = this.repositories
      .filter(r => r.selected)
      .map(r => r.name);

    const rule: Rule = {
      id: this.ruleId ?? crypto.randomUUID(),
      name: this.form.value.name,
      description: this.form.value.description,
      createdBy: 'Admin',
      createdAt: new Date(),
      updatedBy: 'Admin',
      updatedAt: new Date(),
      repositories: selectedRepos
    };

    const save$ = this.isEditMode
      ? this.ruleService.update(this.ruleId!, rule)
      : this.ruleService.create(rule);

    save$.subscribe(() => {
      this.router.navigate(['/pages/main/rules']);
    });
  }
}
