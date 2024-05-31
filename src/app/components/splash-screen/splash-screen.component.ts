import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent {

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
