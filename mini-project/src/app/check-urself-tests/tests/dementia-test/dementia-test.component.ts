import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-dementia-test',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dementia-test.component.html',
  styleUrl: './dementia-test.component.css'
})
export class DementiaTestComponent {

    constructor(private router: Router, private Service: ServiceService) {}

  dementiaScore: string = "dementiaScore"
  timeLeft: number = 5;
  psychTimeLeft: number = 10;
  timerRunning: boolean = false;
  psychTimerRunning: boolean = false;
  taps: number = 0;
  sequences: number = 0;
  score: number | null = null;
  psychScore: number | null = null;
  recallScore: number | null = null;
  recallWords = { dog: false, hat: false, bean: false, red: false };
  clueWords = { dog: false, hat: false, bean: false, red: false };

  

  startTimer() {
    this.timerRunning = true;
    const interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(interval);
        this.timerRunning = false;
        this.timeLeft = 5;
      }
    }, 1000);
  }

  startPsychTimer() {
    this.psychTimerRunning = true;
    const interval = setInterval(() => {
      this.psychTimeLeft--;
      if (this.psychTimeLeft <= 0) {
        clearInterval(interval);
        this.psychTimerRunning = false;
        this.psychTimeLeft = 10;
      }
    }, 1000);
  }

  calculateScore() {
    if (this.taps >= 15) this.score = 4;
    else if (this.taps >= 11) this.score = 3;
    else if (this.taps >= 7) this.score = 2;
    else if (this.taps >= 3) this.score = 1;
    else this.score = 0;
  }

  calculatePsychScore() {
    if (this.sequences >= 4) this.psychScore = 4;
    else if (this.sequences === 3) this.psychScore = 3;
    else if (this.sequences === 2) this.psychScore = 2;
    else if (this.sequences === 1) this.psychScore = 1;
    else this.psychScore = 0;
  }

  calculateRecallScore() {
    let score = 0;
    for (const word in this.recallWords) {
      const key = word as keyof typeof this.recallWords;
      if (this.recallWords[key]) score += 1;
      else if (this.clueWords[key]) score += 0.5;
    }
    this.recallScore = score;
  }

  calculateTotalScore(){
    let total = 0;
    total = (this.score || 0) + (this.psychScore || 0) + (this.recallScore || 0);
    const payload = { total: total,name:"dementia",userId :localStorage.getItem('userId') };
    this.Service.savePhq2Result(payload).subscribe();
  }
}