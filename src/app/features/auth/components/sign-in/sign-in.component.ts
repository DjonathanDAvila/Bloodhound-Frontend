import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule,MatProgressSpinnerModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  isLoading = false;

  loginWithGithub() {
    this.isLoading = true;
    window.location.href = 'http://localhost:5021/api/v1/github/login';
  }
}
