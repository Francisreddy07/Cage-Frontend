import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-gad-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gad-test.component.html',
  styleUrl: './gad-test.component.css'
})
export class GadTestComponent {

   constructor(private router: Router, private Service: ServiceService) {}

  gad2_q1: number = 0;
  gad2_q2: number = 0;
  gad2Score: number | null = null;

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

    const payload = { total: this.gad2Score,name:"gad2Score",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();

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

      const payload = { total: this.gad7Score,name:"gad",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();
  }

}
