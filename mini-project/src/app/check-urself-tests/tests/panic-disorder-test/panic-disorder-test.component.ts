import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-panic-disorder-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './panic-disorder-test.component.html',
  styleUrl: './panic-disorder-test.component.css'
})
export class PanicDisorderTestComponent {


   constructor(private router: Router, private Service: ServiceService) {}
  pd_q1: number | null = null;
  pd_q2: number | null = null;
  pd_q3: number | null = null;
  pd_q4: number | null = null;
  pd_q5: number | null = null;
  pd_q6: number | null = null;

  pdScore: number | null = null;

  calculatePDScore() {

    if (this.pd_q1 !== null && this.pd_q2 !== null && this.pd_q3 !== null && 
        this.pd_q4 !== null && this.pd_q5 !== null && this.pd_q6 !== null) {
      
      this.pdScore = 
        this.pd_q1 + 
        this.pd_q2 + 
        this.pd_q3 + 
        this.pd_q4 + 
        this.pd_q5 + 
        this.pd_q6;
        const payload = { total: this.pdScore,name:"panic-disorder",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();

    } else {
      this.pdScore = null;
      alert('Please answer all questions before calculating your score.');
    }
  }
}
