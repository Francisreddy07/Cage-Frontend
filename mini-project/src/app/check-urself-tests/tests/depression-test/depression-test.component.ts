import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-depression-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './depression-test.component.html',
  styleUrl: './depression-test.component.css'
})
export class DepressionTestComponent {

  phq2_q1: string = '';
  phq2_q2: string = '';
  phq2Score: number | null = null;
  showPhq9: boolean = false;
  phq9_q1: string = '';
  phq9_q2: string = '';
  phq9_q3: string = '';
  phq9_q4: string = '';
  phq9_q5: string = '';
  phq9_q6: string = '';
  phq9_q7: string = '';
  phq9_q8: string = '';
  phq9_q9: string = '';
  phq9Score: number | null = null;

  constructor(private router: Router, private Service: ServiceService) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  calculatePhq2Score() {
    const q1 = parseInt(this.phq2_q1, 10) || 0;
    const q2 = parseInt(this.phq2_q2, 10) || 0;
    this.phq2Score = q1 + q2;

    const payload = { total: this.phq2Score,name:"phq2Score",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();

    if (this.phq2Score >= 3) {
      this.showPhq9 = true;
    }
    
  }

  calculatePhq9Score() {
    const questions = [this.phq9_q1, this.phq9_q2, this.phq9_q3, this.phq9_q4, this.phq9_q5, this.phq9_q6, this.phq9_q7, this.phq9_q8, this.phq9_q9];
    this.phq9Score = questions.reduce((sum, q) => sum + (parseInt(q, 10) || 0), 0);
    const payload = { total: this.phq9Score,name:"depression",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();
  }

}
