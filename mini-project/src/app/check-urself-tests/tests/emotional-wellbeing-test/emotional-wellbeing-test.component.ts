import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emotional-wellbeing-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './emotional-wellbeing-test.component.html',
  styleUrl: './emotional-wellbeing-test.component.css'
})
export class EmotionalWellbeingTestComponent {

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
  }
}
