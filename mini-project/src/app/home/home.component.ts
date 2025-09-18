import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router, private Service:AuthServiceService) { }

token = localStorage.getItem('token');
signOut()
{
  localStorage.removeItem('token')
  this.token=''
}

takeTest()
{
  if(localStorage.getItem('token'))
  {
    this.router.navigate(['/answer-urself'])
  }
  else{
    this.router.navigate(['/sign-up'])
  }
}
}
