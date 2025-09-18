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
      
    },
    error:(err)=>{
      console.log(err);
    }
   })

  }



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
  return "Invalid Score";
}else if (this.illness ==='emotional-wellbeing'){
  if (score >= 12 && score <= 15) {
    return "High well-being";
  } else if (score >= 8 && score <= 11) {
    return "Moderate well-being";
  } else if (score >= 4 && score <= 7) {
    return "Low well-being";
  } else if (score >= 0 && score <= 3) {
    return "Very low well-being";
  }
  return "Invalid Score";}
  else if(this.illness ==='gad'){
    if (score >= 0 && score <= 4) {
    return "Minimal anxiety";
  } else if (score >= 5 && score <= 9) {
    return "Mild anxiety";
  } else if (score >= 10 && score <= 14) {
    return "Moderate anxiety";
  } else if (score >= 15 && score <= 21) {
    return "Severe anxiety";
  }
  return "Invalid Score";}
  else if(this.illness ==='health-anxiety'){
     if (score >= 0 && score <= 4) {
    return "Minimal health anxiety";
  } else if (score >= 5 && score <= 9) {
    return "Mild health anxiety";
  } else if (score >= 10 && score <= 14) {
    return "Moderate health anxiety";
  } else if (score >= 15 && score <= 21) {
    return "Severe health anxiety";
  }
  return "Invalid Score";
}
else if (this.illness ==='panic-disorder'){
  if (score >= 0 && score <= 4) {
    return "Minimal panic symptoms";
  } else if (score >= 5 && score <= 9) {
    return "Mild panic disorder";
  } else if (score >= 10 && score <= 14) {
    return "Moderate panic disorder";
  } else if (score >= 15 && score <= 18) {
    return "Severe panic disorder";
  }
  return "Invalid Score";
}
else if(this.illness ==='ptsd'){
  if (score >= 0 && score <= 1) {
    return "Minimal / No PTSD symptoms";
  } else if (score >= 2 && score <= 3) {
    return "Possible PTSD (subthreshold)";
  } else if (score >= 4 && score <= 5) {
    return "Probable PTSD (clinically significant)";
  }
  return "Invalid Score";
}
else if (this.illness ==='ocd'){ 
    if (score >= 0 && score <= 4) {
    return "Minimal OCD symptoms";
  } else if (score >= 5 && score <= 9) {
    return "Mild OCD";
  } else if (score >= 10 && score <= 14) {
    return "Moderate OCD";
  } else if (score >= 15 && score <= 21) {
    return "Severe OCD";
  }
  return "Invalid Score";
}

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
  else if (this.illness ==='emotional-wellbeing'){
    if (score >= 12 && score <= 15) {
    return "Maintain positive habits; continue lifestyle balance";
  } else if (score >= 8 && score <= 11) {
    return "Monitor well-being; practice stress management and social engagement";
  } else if (score >= 4 && score <= 7) {
    return "Encourage counseling, mindfulness, and peer/mentor support";
  } else if (score >= 0 && score <= 3) {
    return "Seek professional mental health support; structured intervention recommended";
  }
  return "Invalid Action";}
  else if(this.illness ==='gad'){
      if (score >= 0 && score <= 4) {
    return "No intervention required";
  } else if (score >= 5 && score <= 9) {
    return "Watchful waiting; provide self-help resources";
  } else if (score >= 10 && score <= 14) {
    return "Consider counseling, structured therapy, or pharmacological options";
  } else if (score >= 15 && score <= 21) {
    return "Active treatment with psychotherapy and/or pharmacotherapy; referral to specialist";
  }
  return "Invalid Action";
}
else if(this.illness ==='health-anxiety'){
  if (score >= 0 && score <= 4) {
    return "No clinical concern; reassurance only";
  } else if (score >= 5 && score <= 9) {
    return "Psychoeducation, stress reduction, lifestyle adjustment";
  } else if (score >= 10 && score <= 14) {
    return "Recommend counseling, CBT focused on health concerns";
  } else if (score >= 15 && score <= 21) {
    return "Active treatment with psychotherapy (CBT/ACT) and/or pharmacotherapy; consider referral to specialist";
  }
  return "Invalid Action";
}
else if (this.illness ==='panic-disorder'){
  if (score >= 0 && score <= 4) {
    return "No intervention; basic reassurance";
  } else if (score >= 5 && score <= 9) {
    return "Psychoeducation; stress/lifestyle management";
  } else if (score >= 10 && score <= 14) {
    return "Structured therapy (CBT for panic disorder); consider pharmacological support";
  } else if (score >= 15 && score <= 18) {
    return "Immediate clinical intervention; psychotherapy (CBT) + pharmacotherapy; referral to specialist";
  }
  return "Invalid Action";
}
else if(this.illness ==='ptsd'){ 
  if (score >= 0 && score <= 1) {
    return "No clinical concern; reassurance, monitoring";
  } else if (score >= 2 && score <= 3) {
    return "Psychoeducation, supportive counseling, monitor progression";
  } else if (score >= 4 && score <= 5) {
    return "Formal PTSD assessment; initiate psychotherapy (trauma-focused CBT/EMDR); referral to specialist if needed";
  }
  return "Invalid Action";
}
else if (this.illness ==='ocd'){ 
   if (score >= 0 && score <= 4) {
    return "No intervention required; reassurance only";
  } else if (score >= 5 && score <= 9) {
    return "Psychoeducation; monitor symptoms; lifestyle management";
  } else if (score >= 10 && score <= 14) {
    return "Structured psychotherapy (CBT with ERP); consider medication if functional impact present";
  } else if (score >= 15 && score <= 21) {
    return "Immediate intensive treatment with CBT (ERP) + pharmacotherapy; referral to OCD specialist if resistant";
  }
  return "Invalid Action";
}


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
else if (this.illness ==='emotional-wellbeing'){
     if (score >= 12 && score <= 15) {
    return "90%";
  } else if (score >= 8 && score <= 11) {
    return "75%";
  } else if (score >= 4 && score <= 7) {
    return "40%";
  } else if (score >= 0 && score <= 3) {
    return "15%";
  }
  return "Invalid PPV";
}

else if(this.illness ==='gad'){
   if (score >= 0 && score <= 4) {
    return "20%";
  } else if (score >= 5 && score <= 9) {
    return "45%";
  } else if (score >= 10 && score <= 14) {
    return "70%";
  } else if (score >= 15 && score <= 21) {
    return "90%";
  }
  return "Invalid PPV";
}

else if(this.illness ==='health-anxiety'){
   if (score >= 0 && score <= 4) {
    return "20%";
  } else if (score >= 5 && score <= 9) {
    return "50%";
  } else if (score >= 10 && score <= 14) {
    return "75%";
  } else if (score >= 15 && score <= 21) {
    return "90%";
  }
  return "Invalid PPV";
}
else if (this.illness ==='panic-disorder'){
    if (score >= 0 && score <= 4) {
    return "25%";
  } else if (score >= 5 && score <= 9) {
    return "55%";
  } else if (score >= 10 && score <= 14) {
    return "80%";
  } else if (score >= 15 && score <= 18) {
    return "95%";
  }
  return "Invalid PPV";
}
else if(this.illness ==='ptsd'){
  if (score >= 0 && score <= 1) {
    return "20%";
  } else if (score >= 2 && score <= 3) {
    return "60%";
  } else if (score >= 4 && score <= 5) {
    return "90%";
  }
  return "Invalid PPV";
}

else if (this.illness ==='ocd'){ 
    if (score >= 0 && score <= 4) {
    return "25%";
  } else if (score >= 5 && score <= 9) {
    return "55%";
  } else if (score >= 10 && score <= 14) {
    return "80%";
  } else if (score >= 15 && score <= 21) {
    return "95%";
  }
  return "Invalid PPV";
}

}




}