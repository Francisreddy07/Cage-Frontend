import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-emotional-wellbeing-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './emotional-wellbeing-test.component.html',
  styleUrl: './emotional-wellbeing-test.component.css'
})
export class EmotionalWellbeingTestComponent {
 constructor(private router: Router, private Service: ServiceService) {}
  ewb_q1: number = 0;
  ewb_q2: number = 0;
  ewb_q3: number = 0;
  ewb_q4: number = 0;
  ewb_q5: number = 0;
  ewbScore: number | null = null;

  calculateEWBScore() {
    this.ewbScore = 
      this.ewb_q1 + 
      this.ewb_q2 + 
      this.ewb_q3 + 
      this.ewb_q4 + 
      this.ewb_q5;

      const payload = { total: this.ewbScore,name:"emotional-wellbeing",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();
  }
}
