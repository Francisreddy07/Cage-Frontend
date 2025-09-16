import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-answer-urself',
  imports: [RouterLink],
  templateUrl: './answer-urself.component.html',
  styleUrl: './answer-urself.component.css'
})
export class AnswerUrselfComponent {
scrollToCards(){
  const booksection = document.getElementById('cardsSection');
  if (booksection) {
    booksection.scrollIntoView({behavior:'smooth'})
  }
}
}
