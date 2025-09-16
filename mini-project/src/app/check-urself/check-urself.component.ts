// import { CommonModule, NgFor, NgIf } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Route, RouterLink, Router } from '@angular/router';


// @Component({
//   selector: 'app-check-urself',
//   imports: [CommonModule, RouterLink],
//   templateUrl: './check-urself.component.html',
//   styleUrl: './check-urself.component.css'
// })
// export class CheckUrselfComponent implements OnInit {
//   conditionId!: string;
//   data: any;

//   constructor(private Acroute: ActivatedRoute, private route: Router ) {}

//   onCardClick(index:number) {
// if (index === 9) {
//   console.log('Student Overview clicked');
//   // localStorage.setItem('user',title)
//   this.route.navigate(['/check-urself/Dementi']);
// }
// if (index === 1) {
//   console.log('Student Overview clicked');
//   // localStorage.setItem('user',title)
//   this.route.navigate(['/getteachers']);
// }
// }    


//   conditions: any = {
//     depression: {
//       title: 'Depression',
//       intro: 'Depression is more than sadness—it’s a medical condition that affects mood and daily life.',
//       description: 'Depression causes persistent feelings of sadness, emptiness, and loss of interest in activities. It can interfere with relationships, work, and overall health.',
//       symptoms: [
//         'Persistent sadness or emptiness',
//         'Loss of interest in activities',
//         'Sleep and appetite changes',
//         'Fatigue or low energy',
//         'Difficulty concentrating',
//         'Feelings of hopelessness'
//       ]
//     },
//     'emotional-wellbeing': {
//       title: 'Emotional Wellbeing with a Baby',
//       intro: 'Parenting brings joy and stress. Emotional wellbeing matters for both parent and child.',
//       description: 'Managing emotional balance while raising a baby is vital. Challenges like stress, fatigue, and mood changes can affect parental health and baby development.',
//       symptoms: [
//         'Mood swings',
//         'Stress from caregiving',
//         'Anxiety over baby’s health',
//         'Sleep disruption',
//         'Difficulty adjusting to new roles'
//       ]
//     },
//     gad: {
//       title: 'Generalised Anxiety Disorder',
//       intro: 'GAD involves excessive, uncontrollable worry about many aspects of life.',
//       description: 'People with GAD feel constant tension and expect disaster even when there is little reason. It interferes with work, relationships, and daily living.',
//       symptoms: [
//         'Chronic worrying',
//         'Restlessness',
//         'Irritability',
//         'Muscle tension',
//         'Difficulty concentrating',
//         'Sleep problems'
//       ]
//     },
//     'health-anxiety': {
//       title: 'Health Anxiety',
//       intro: 'Health anxiety is constant fear about being ill or developing diseases.',
//       description: 'Even normal body sensations may be misinterpreted as signs of severe illness. Reassurance rarely helps and worry persists.',
//       symptoms: [
//         'Frequent health checks',
//         'Fear of serious illness',
//         'Doctor visits without clear cause',
//         'Body scanning for symptoms',
//         'Difficulty being reassured'
//       ]
//     },
//     'panic-disorder': {
//       title: 'Panic Disorder',
//       intro: 'Panic disorder causes sudden attacks of intense fear with physical symptoms.',
//       description: 'Panic attacks come unexpectedly and can feel life-threatening. They often lead to avoidance behaviors and isolation.',
//       symptoms: [
//         'Racing heartbeat',
//         'Sweating',
//         'Chest pain',
//         'Feeling of choking',
//         'Fear of losing control',
//         'Sudden overwhelming dread'
//       ]
//     },
//     'social-anxiety': {
//       title: 'Social Anxiety',
//       intro: 'Social anxiety is fear of judgment in social or performance situations.',
//       description: 'It can make daily activities like speaking, eating, or meeting people extremely distressing, leading to avoidance and isolation.',
//       symptoms: [
//         'Fear of embarrassment',
//         'Avoiding social events',
//         'Blushing or sweating',
//         'Difficulty speaking in public',
//         'Excessive self-consciousness'
//       ]
//     },
//     ptsd: {
//       title: 'Post Traumatic Stress Disorder',
//       intro: 'PTSD develops after experiencing or witnessing traumatic events.',
//       description: 'PTSD can cause flashbacks, nightmares, and severe anxiety. It impacts mental and physical health long after the event.',
//       symptoms: [
//         'Flashbacks',
//         'Nightmares',
//         'Avoiding reminders',
//         'Hyperarousal',
//         'Difficulty sleeping',
//         'Emotional numbness'
//       ]
//     },
//     ocd: {
//       title: 'Obsessive Compulsive Disorder',
//       intro: 'OCD involves unwanted thoughts and repetitive behaviors.',
//       description: 'Obsessions create intense anxiety, and compulsions are repetitive actions done to relieve that anxiety, often disrupting life.',
//       symptoms: [
//         'Repetitive hand washing',
//         'Checking behaviors',
//         'Intrusive thoughts',
//         'Need for symmetry',
//         'Ritualistic actions'
//       ]
//     },
//     phobias: {
//       title: 'Phobias',
//       intro: 'Phobias are intense fears of specific objects or situations.',
//       description: 'The fear is stronger than the actual danger. It can lead to avoidance and disruption of normal life.',
//       symptoms: [
//         'Intense fear response',
//         'Avoidance behavior',
//         'Sweating or trembling',
//         'Racing heartbeat',
//         'Sense of danger when exposed to trigger'
//       ]
//     },
//     dementia:{
//       title: 'Dementia',
//       intro :'Dementia is gradual loss of mental abilities',
//       description:'Dementia is a condition where brain function declines over time, causing memory loss, confusion, poor judgement and difficulty with dialy activities.',
//       symptoms:[
//         'Memory loss',
//         'Confusion',
//         'Poor Judgement',
//         'Language Problems',
//         'Difficulty in Concentrating',
//         'Mood Changes'
//       ]
//     }
//   };

  

//   ngOnInit() {
//     this.Acroute.paramMap.subscribe(params => {
//       this.conditionId = params.get('id') || '';
//       this.data = this.conditions[this.conditionId];
//     });
//   }
// }


import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-check-urself',
  standalone: true, // Assuming this is a standalone component
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  templateUrl: './check-urself.component.html',
  styleUrl: './check-urself.component.css'
})
export class CheckUrselfComponent implements OnInit {
  conditionId!: string;
  data: any;

  // constructor(private Acroute: ActivatedRoute, private route: Router ) {}

  // Static data model for all conditions
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
    'social-anxiety': {
      title: 'Social Anxiety',
      intro: 'Social anxiety is fear of judgment in social or performance situations.',
      description: 'It can make daily activities like speaking, eating, or meeting people extremely distressing, leading to avoidance and isolation.',
      symptoms: [
        'Fear of embarrassment',
        'Avoiding social events',
        'Blushing or sweating',
        'Difficulty speaking in public',
        'Excessive self-consciousness'
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
    phobias: {
      title: 'Phobias',
      intro: 'Phobias are intense fears of specific objects or situations.',
      description: 'The fear is stronger than the actual danger. It can lead to avoidance and disruption of normal life.',
      symptoms: [
        'Intense fear response',
        'Avoidance behavior',
        'Sweating or trembling',
        'Racing heartbeat',
        'Sense of danger when exposed to trigger'
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.conditionId = params.get('id') || '';
      this.data = this.conditions[this.conditionId];
    });
  }

  // New method to get the initial test ID for each condition
  // getInitialTestId(condition: string): string {
  //   switch (condition) {
  //     case 'depression':
  //       this.router.navigate(['/condition/depression/test']);
  //       break;
  //     case 'gad':
  //       return 'gad2';
  //     case 'dementia':
  //       this.router.navigate(['/condition/dementia/test']);
  //       return '';
  //     default:
  //       return '';
  //   }
  //   return '';
  // }
  getInitialTestId(condition: string): string {
  switch (condition) {
    case 'depression': return 'test';
    case 'dementia': return 'test';
    case 'gad' : return 'test';
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


}