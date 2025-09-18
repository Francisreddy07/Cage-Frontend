import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-check-urself',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  templateUrl: './check-urself.component.html',
  styleUrl: './check-urself.component.css'
})
export class CheckUrselfComponent implements OnInit {
  conditionId!: string;
  data: any;
  userloggedin :boolean=false;
  conditions: any = {
    depression: {
      title: 'Depression',
      intro: 'Depression is more than sadness—it’s a medical condition that affects mood and daily life.',
      description: 'Depression causes persistent feelings of sadness, emptiness, and loss of interest in activities. It can interfere with relationships, work, and overall health.',
      symptoms: [
        'Persistent sadness or emptiness',
        'Loss of interest in activities',
        'Sleep and appetite changes',
        'Fatigue or low energy',
        'Difficulty concentrating',
        'Feelings of hopelessness'
      ]
    },
    'emotional-wellbeing': {
      title: 'Emotional Wellbeing with a Baby',
      intro: 'Parenting brings joy and stress. Emotional wellbeing matters for both parent and child.',
      description: 'Managing emotional balance while raising a baby is vital. Challenges like stress, fatigue, and mood changes can affect parental health and baby development.',
      symptoms: [
        'Mood swings',
        'Stress from caregiving',
        'Anxiety over baby’s health',
        'Sleep disruption',
        'Difficulty adjusting to new roles'
      ]
    },
    gad: {
      title: 'Generalised Anxiety Disorder',
      intro: 'GAD involves excessive, uncontrollable worry about many aspects of life.',
      description: 'People with GAD feel constant tension and expect disaster even when there is little reason. It interferes with work, relationships, and daily living.',
      symptoms: [
        'Chronic worrying',
        'Restlessness',
        'Irritability',
        'Muscle tension',
        'Difficulty concentrating',
        'Sleep problems'
      ]
    },
    'health-anxiety': {
      title: 'Health Anxiety',
      intro: 'Health anxiety is constant fear about being ill or developing diseases.',
      description: 'Even normal body sensations may be misinterpreted as signs of severe illness. Reassurance rarely helps and worry persists.',
      symptoms: [
        'Frequent health checks',
        'Fear of serious illness',
        'Doctor visits without clear cause',
        'Body scanning for symptoms',
        'Difficulty being reassured'
      ]
    },
    'panic-disorder': {
      title: 'Panic Disorder',
      intro: 'Panic disorder causes sudden attacks of intense fear with physical symptoms.',
      description: 'Panic attacks come unexpectedly and can feel life-threatening. They often lead to avoidance behaviors and isolation.',
      symptoms: [
        'Racing heartbeat',
        'Sweating',
        'Chest pain',
        'Feeling of choking',
        'Fear of losing control',
        'Sudden overwhelming dread'
      ]
    },
    ptsd: {
      title: 'Post Traumatic Stress Disorder',
      intro: 'PTSD develops after experiencing or witnessing traumatic events.',
      description: 'PTSD can cause flashbacks, nightmares, and severe anxiety. It impacts mental and physical health long after the event.',
      symptoms: [
        'Flashbacks',
        'Nightmares',
        'Avoiding reminders',
        'Hyperarousal',
        'Difficulty sleeping',
        'Emotional numbness'
      ]
    },
    ocd: {
      title: 'Obsessive Compulsive Disorder',
      intro: 'OCD involves unwanted thoughts and repetitive behaviors.',
      description: 'Obsessions create intense anxiety, and compulsions are repetitive actions done to relieve that anxiety, often disrupting life.',
      symptoms: [
        'Repetitive hand washing',
        'Checking behaviors',
        'Intrusive thoughts',
        'Need for symmetry',
        'Ritualistic actions'
      ]
    },

    dementia: {
      title: 'Dementia',
      intro: 'Dementia is gradual loss of mental abilities',
      description: 'Dementia is a condition where brain function declines over time, causing memory loss, confusion, poor judgement and difficulty with dialy activities.',
      symptoms: [
        'Memory loss',
        'Confusion',
        'Poor Judgement',
        'Language Problems',
        'Difficulty in Concentrating',
        'Mood Changes'
      ]
    }
  };

  constructor(private route: ActivatedRoute, private router: Router, private Service:AuthServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.conditionId = params.get('id') || '';
      this.data = this.conditions[this.conditionId];
    });

    this.isuserloggedin()
  }

  getInitialTestId(condition: string): string {
  switch (condition) {
    case 'depression': return 'test';
    case 'dementia': return 'test';
    case 'gad' : return 'test';
    case 'health-anxiety': return 'test';
    case 'panic-disorder': return 'test';
    case 'ocd' : return 'test';
    case 'ptsd' : return 'test';
    default: return '';
  }
}

takeTest()
{
  if(localStorage.getItem('token'))
  {
    this.router.navigate(['/condition', this.conditionId, 'test'])
  }
  else{
    this.router.navigate(['/sign-up'])
  }
}

isuserloggedin(this: any) {
  if (localStorage.getItem('token')){
    this.userloggedin = true
  };
}


}

