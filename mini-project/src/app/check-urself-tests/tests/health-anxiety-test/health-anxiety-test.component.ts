import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-health-anxiety-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './health-anxiety-test.component.html',
  styleUrl: './health-anxiety-test.component.css'
})
export class HealthAnxietyTestComponent {

   constructor(private router: Router, private Service: ServiceService) {}

  ha_q1: number = 0;
  ha_q2: number = 0;
  ha_q3: number = 0;
  ha_q4: number = 0;
  ha_q5: number = 0;
  ha_q6: number = 0;
  ha_q7: number = 0;
  haScore: number | null = null;

  calculateHAScore() {
    this.haScore = 
      this.ha_q1 +
      this.ha_q2 +
      this.ha_q3 +
      this.ha_q4 +
      this.ha_q5 +
      this.ha_q6 +
      this.ha_q7;

      const payload = { total: this.haScore,name:"health-anxiety",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();

  }

}
