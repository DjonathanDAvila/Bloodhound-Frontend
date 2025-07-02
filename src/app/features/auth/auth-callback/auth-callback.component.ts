import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const expiration = this.route.snapshot.queryParamMap.get('expiration');

    if (token) {
      localStorage.setItem('token', token);
      if (expiration) {
        localStorage.setItem('tokenExpiration', expiration);
      }
      // console.log(token)
      // console.log('token')
      // debugger
      this.router.navigate(['/pages/main']);
    } else {
      // debugger
      this.router.navigate(['/login']);
    }
  }
}
