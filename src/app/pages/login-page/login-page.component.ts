import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../data/services/auth/auth.service';
import { ILogin } from '../../data/services/auth/types';
import { Router } from '@angular/router';

// username - gorillazbananaz
// пароль - 4Ya2P6zKIb

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value as ILogin).subscribe((res) => {
        this.router.navigate(['']);
      });
    }
  }
}
