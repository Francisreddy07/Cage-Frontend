import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gad-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gad-test.component.html',
  styleUrl: './gad-test.component.css'
})
export class GadTestComponent {
  gad2_q1: number = 0;
  gad2_q2: number = 0;
  gad2Score: number | null = null;

  // GAD-7 answers
  gad7_q1: number = 0;
  gad7_q2: number = 0;
  gad7_q3: number = 0;
  gad7_q4: number = 0;
  gad7_q5: number = 0;
  gad7_q6: number = 0;
  gad7_q7: number = 0;
  gad7Score: number | null = null;

  showGad7: boolean = false;

  calculateGad2Score() {
    this.gad2Score = this.gad2_q1 + this.gad2_q2;
    this.showGad7 = this.gad2Score >= 3;
  }

  calculateGad7Score() {
    this.gad7Score =
      this.gad7_q1 +
      this.gad7_q2 +
      this.gad7_q3 +
      this.gad7_q4 +
      this.gad7_q5 +
      this.gad7_q6 +
      this.gad7_q7;
  }

}
