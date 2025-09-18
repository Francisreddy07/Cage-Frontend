import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-score',
  imports: [CommonModule, RouterLink],
  templateUrl: './test-score.component.html',
  styleUrl: './test-score.component.css'
})
export class TestScoreComponent {
phq9:any;
illness:any;

  constructor(private scoreService:ServiceService, private route:ActivatedRoute)
  {

this.illness = this.route?.snapshot?.paramMap.get('illness');
console.log(this.illness);

   scoreService.getScoreByUser(localStorage.getItem('userId')).subscribe({
    next:(data:any)=>{
      console.log(data);
      let illnessScore = data.user_scores.find((score: any) => score.name === this.illness);
      this.phq9 = illnessScore ;
      // console.log('------',this.phq9);
      
    },
    error:(err)=>{
      console.log(err);
    }
   })

  }

// Example mapping function

getPhq9Interpretation(score: number): any {
  if(this.illness ==='depression'){   {
  if (score >= 0 && score <= 4) {
    return "None-minimal Depression";
  } else if (score >= 5 && score <= 9) {
    return "Mild Depression";
  } else if (score >= 10 && score <= 14) {
    return "Moderate Depression";
  } else if (score >= 15 && score <= 19) {
    return "Moderately Severe Depression";
  } else if (score >= 20 && score <= 27) {
    return "Severe Depression ";
  }
  return "Invalid Score";
}}else if(this.illness ==='dementia'){
  if (score >= 6 && score <= 7) {
    return "No dementia (Normal cognition)";
  } else if (score >= 4 && score <= 5) {
    return "Mild dementia";
  } else if (score >= 2 && score <= 3) {
    return "Moderate dementia";
  } else if (score >= 0 && score <= 1) {
    return "Severe dementia";
  }
  return "Invalid Score";}
}


getPhq9Action(score: number): any {
  if(this.illness ==='depression'){
  if (score >= 0 && score <= 4) {
    return "None";
  } else if (score >= 5 && score <= 9) {
    return "Watchful waiting; repeat PHQ-9 at follow-up";
  } else if (score >= 10 && score <= 14) {
    return "Treatment plan, considering counseling, follow-up and/or pharmacotherapy";
  } else if (score >= 15 && score <= 19) {
    return "Active treatment with pharmacotherapy and/or psychotherapy";
  } else if (score >= 20 && score <= 27) {
    return "Immediate initiation of pharmacotherapy; referral to mental health specialist";
  }
  return "Invalid Action";
}else if(this.illness ==='dementia'){ if (score >= 6 && score <= 7) {
    return "No specific treatment needed; maintain healthy lifestyle, regular monitoring";
  } else if (score >= 4 && score <= 5) {
    return "Early intervention; cognitive stimulation, routine check-ups, caregiver support";
  } else if (score >= 2 && score <= 3) {
    return "Structured treatment plan; consider medication, psychotherapy, occupational therapy";
  } else if (score >= 0 && score <= 1) {
    return "Intensive care required; pharmacotherapy, full caregiver support, possible specialist referral";
  }
  return "Invalid Action";}
}

getPhq2PPV(score: number): any {

  if(this.illness ==='depression'){     
  if (score >= 0 && score <= 4) {
    return "36.9%";
  } else if (score >= 5 && score <= 9) {
    return "48.3%";
  } else if (score >= 10 && score <= 14) {
    return "75.0%";
  } else if (score >= 15 && score <= 19) {
    return "81.2%";
  } else if (score >= 20 && score <= 27) {
    return "84.6%";
  } else if (score >= 28 && score <= 28) {
    return "92.9%";
  }
  return "Invalid Action";
}
else if(this.illness ==='dementia'){
     if (score >= 6 && score <= 7) {
    return "30%";
  } else if (score >= 4 && score <= 5) {
    return "65%";
  } else if (score >= 2 && score <= 3) {
    return "85%";
  } else if (score >= 0 && score <= 1) {
    return "95%";
  }
  return "Invalid PPV";

}
}





}