import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
import { LandingComponent } from './components/landing/landing.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RegisterComponent, LandingComponent, SplashScreenComponent]
})
export class AppComponent {
  title = 'dscpln';
}
