import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLogin = true;
  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthServiceService, private router: Router, private http: HttpClient) {}

  toggleAuth() {
    this.isLogin = !this.isLogin;
  }

  onSignIn() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/']);
      },
      error: (err) => alert(err.error.message || 'Login failed')
    });
  }

  onSignUp() {
    this.auth.signup({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => {
        alert('Signup successful, please log in');
        this.toggleAuth();
      },
      error: (err) => alert(err.error.message || 'Signup failed')
    });
  }
  apiBase = 'http://localhost:5000'; // backend base URL



signingUp = false;

signUp(name: string, email: string, password: string): void {
  this.signingUp = true;

  const url = `${this.apiBase}/auth/register`;
  const body = { name, email, password };
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.http.post<{ message: string }>(url, body, { headers, observe: 'response' })
    .subscribe({
      next: (res) => {
        console.log(res)
        if (res.status === 201) {
          alert('Registration successful');
        } else {
          alert(`Unexpected status: ${res.status}`);
        }
        this.signingUp = false;
      },
      error: (err: HttpErrorResponse) => {
        // Network/CORS will surface here as status 0
        if (err.status === 0) {
          alert(`Network error: ${err.message}. Is backend running on ${this.apiBase}?`);
        } else if (err.status === 409) {
          alert('User already exists');
        } else if (err.error?.error) {
          alert(err.error.error);
        } else {
          alert(`Register failed: ${err.status} ${err.statusText}`);
        }
        this.signingUp = false;
      }
    });
}

// Example handler if your template uses a form submit:
onSubmit(form: { value: { name: string; email: string; password: string } }): void {
  const { name, email, password } = form.value;
  if (!email || !password) {
    alert('Email and password are required');
    return;
  }
  this.signUp(name, email, password);
}
}
