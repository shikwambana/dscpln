import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    leader: new FormControl(''),
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
