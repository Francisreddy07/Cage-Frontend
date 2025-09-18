import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-ptsd-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ptsd-test.component.html',
  styleUrl: './ptsd-test.component.css'
})
export class PtsdTestComponent {

   constructor(private router: Router, private Service: ServiceService) {}
 ptsd_q1: string | null = null;
  ptsd_q2: string | null = null;
  ptsd_q3: string | null = null;
  ptsd_q4: string | null = null;
  ptsd_q5: string | null = null;

  ptsdScore: number | null = null;

  calculatePTSDScore() {
    
    if (this.ptsd_q1 !== null && this.ptsd_q2 !== null && this.ptsd_q3 !== null && 
        this.ptsd_q4 !== null && this.ptsd_q5 !== null) {
      
      let score = 0;
      if (this.ptsd_q1 === 'yes') score++;
      if (this.ptsd_q2 === 'yes') score++;
      if (this.ptsd_q3 === 'yes') score++;
      if (this.ptsd_q4 === 'yes') score++;
      if (this.ptsd_q5 === 'yes') score++;

      this.ptsdScore = score;
      
      const payload = { total: this.ptsdScore,name:"ptsd",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();
    } else {
      this.ptsdScore = null;
      alert('Please answer all questions before calculating your score.');
    }
  }
}
