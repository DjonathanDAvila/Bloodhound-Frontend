import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-connect-github',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './connect-github.component.html',
  styleUrls: ['./connect-github.component.scss']
})
export class ConnectGithubComponent {
  connectGithub() {
    // console.log('Redirecting to GitHub...');
    // Aqui você implementaria a lógica OAuth, se necessário
  }
}
