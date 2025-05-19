import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Repository } from '../../../core/models/repository.model';
import { Rule } from '../../../core/models/rule.model';
import { RepositoriesService } from '../../../core/services/repositories.service';
import { RuleService } from '../../../core/services/rule.service';
import { DeleteDialogComponent } from '../../shared/dialogs/delete-dialog/delete-dialog.component';



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
    private router: Router,
    private route: ActivatedRoute,
    private repositoriesService: RepositoriesService,
    private ruleService: RuleService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      repositoryId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRepositories();

    this.ruleId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.ruleId;

    if (this.isEditMode && this.ruleId) {
      this.ruleService.getById(this.ruleId).subscribe((rule: Rule) => {
        this.form.patchValue({
          title: rule.title,
          text: rule.text,
          repositoryId: rule.repositoryId
        });

        this.repositories.forEach(repo => {
          repo.selected = rule.repositoryId === repo.id;
        });
      });
    }
  }

  loadRepositories(): void {
    this.repositoriesService.getRepositories().subscribe((repos: Repository[]) => {
      this.repositories = repos.map(repo => ({ ...repo, selected: false }));
    });
  }

  toggleSelectAll(event: any): void {
    const checked = event.checked ?? event.target?.checked;
    this.repositories.forEach(r => r.selected = checked);
  }

  onSubmit(): void {
    // debugger
    // console.log('Form valid?', this.form.valid);
    // console.log('Form status:', this.form.status);
    // console.log('Form errors:', this.form.errors);
    // console.log('Controls:');
    // Object.keys(this.form.controls).forEach(key => {
    //   const control = this.form.get(key);
    //   console.log(key, control?.valid, control?.errors);
    // });
    // console.log('Form value:', this.form.value);
    if (this.form.invalid) return;

    const selectedRepo = this.repositories.find(r => r.selected);

    const body = {
      title: this.form.value.title,
      text: this.form.value.text,
      repositoryId: selectedRepo?.id ?? this.form.value.repositoryId
    };

    const save$ = this.isEditMode && this.ruleId
      ? this.ruleService.update(this.ruleId, body)
      : this.ruleService.create(body);

    save$.subscribe({
      next: () => {
        this.snackBar.open(
          this.isEditMode ? 'Regra atualizada com sucesso!' : 'Regra criada com sucesso!',
          'Fechar',
          {
            duration: 3000,
            panelClass: ['snackbar-success']
          }
        );

        this.router.navigate(['/pages/main/rules']);
      },
      error: (err: any) => {
        console.error('Erro ao salvar a regra:', err);
        this.snackBar.open('Erro ao salvar a regra.', 'Fechar', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }

  onDelete(): void {
    if (!this.ruleId) return;

    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ruleService.delete(this.ruleId!).subscribe(() => {
          this.snackBar.open('Regra deletada com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
          this.router.navigate(['/pages/main/rules']);
        });
      }
    });
  }

  onRepositorySelectChange(repo: Repository, checked: boolean): void {
    if (checked) {
      this.repositories.forEach(r => {
        if (r !== repo) r.selected = false;
      });
      this.form.patchValue({ repositoryId: repo.id });
    } else {
      this.form.patchValue({ repositoryId: null });
    }

    this.cdr.detectChanges();

    console.log('repositoryId atualizado no form:', this.form.get('repositoryId')?.value);
  }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }
}
