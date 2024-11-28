import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RegisterService } from '../../service/register.service';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  userDetails = {
    userName: '',
    userPassword: ''
  };

  registerDetails = {
    userName: '',
    userPassword: ''
  };
  errorMessage: string = '';
  successMessage: string='';

  constructor(private loginService: LoginService,
    private registerService : RegisterService, private router: Router) {}

  login() {
    console.log(this.userDetails);
    this.loginService.login(this.userDetails).subscribe({
      //   response => {
      //     if (response) {
      //       // Navigate to dashboard or another page upon successful login
      //       this.router.navigate(['/']);
      //     } else {
      //       alert('Invalid credentials');
      //     }
      //   },
      //   error => {
      //     alert('An error occurred during login');
      //   }
      // );
      next: (response) => {
        this.successMessage = `login successfull!`;
        alert(this.successMessage);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Invalid username or password.';
        alert('login failed');
      },
    });
  }

  register() {
    console.log(this.registerDetails);
    this.registerService.register(this.registerDetails).subscribe(
      //   (response: string) => {
      //     if (response) {
      //       alert(response);
      //       // alert('Registration successful');
      //       this.userDetails.userName = this.registerDetails.userName;
      //       this.userDetails.userPassword = this.registerDetails.userPassword;
      //       // Switch to the login form
      //       document.getElementById('flip')?.click();
      //     }
      //   },
      //   error => {
      //     alert('Registration failed');
      //   }
      // );
      response => {alert('User registered successfully');
        this.router.navigate(['/']);
      },
      error => alert('Registration failed')
    );
  }
}