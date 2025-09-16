import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements AfterViewInit {
 ngAfterViewInit() {
    const toggleBtn = document.getElementById('togglePwd');
    const pwd = document.getElementById('password') as HTMLInputElement;
    toggleBtn?.addEventListener('click', () => {
      const isShown = pwd.type === 'text';
      pwd.type = isShown ? 'password' : 'text';
      toggleBtn.textContent = isShown ? 'Show' : 'Hide';
      toggleBtn?.setAttribute('aria-pressed', String(!isShown));
    });
  }
[x: string]: any;
isAdminLogin: any;
setLoginType(arg0: boolean) {
throw new Error('Method not implemented.');
}
signIn(){
  
}


}
