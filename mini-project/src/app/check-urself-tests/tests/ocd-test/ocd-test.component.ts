import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-ocd-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ocd-test.component.html',
  styleUrl: './ocd-test.component.css'
})
export class OcdTestComponent {

   constructor(private router: Router, private Service: ServiceService) {}

 ocd_q1: number | null = null;
  ocd_q2: number | null = null;
  ocd_q3: number | null = null;
  ocd_q4: number | null = null;
  ocd_q5: number | null = null;
  ocd_q6: number | null = null;
  ocd_q7: number | null = null;

  ocdScore: number | null = null;

  calculateOCDScore() {
    // Check if all questions have been answered
    if (this.ocd_q1 !== null && this.ocd_q2 !== null && this.ocd_q3 !== null && 
        this.ocd_q4 !== null && this.ocd_q5 !== null && this.ocd_q6 !== null &&
        this.ocd_q7 !== null) {
      
      this.ocdScore = 
        this.ocd_q1 + 
        this.ocd_q2 + 
        this.ocd_q3 + 
        this.ocd_q4 + 
        this.ocd_q5 + 
        this.ocd_q6 +
        this.ocd_q7;
        const payload = { total: this.ocdScore,name:"ocd",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();

    } else {
      this.ocdScore = null;
      alert('Please answer all questions before calculating your score.');
    }
  }
}
