import { Routes } from '@angular/router';
import { CheckUrselfComponent } from './check-urself/check-urself.component';
import { HomeComponent } from './home/home.component';
import { AnswerUrselfComponent } from './answer-urself/answer-urself.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DementiaTestComponent } from './check-urself-tests/tests/dementia-test/dementia-test.component';
import { DepressionTestComponent } from './check-urself-tests/tests/depression-test/depression-test.component';
import { GadTestComponent } from './check-urself-tests/tests/gad-test/gad-test.component';
import { EmotionalWellbeingTestComponent } from './check-urself-tests/tests/emotional-wellbeing-test/emotional-wellbeing-test.component';
import { HealthAnxietyTestComponent } from './check-urself-tests/tests/health-anxiety-test/health-anxiety-test.component';
import { PanicDisorderTestComponent } from './check-urself-tests/tests/panic-disorder-test/panic-disorder-test.component';
import { OcdTestComponent } from './check-urself-tests/tests/ocd-test/ocd-test.component';
import { PtsdTestComponent } from './check-urself-tests/tests/ptsd-test/ptsd-test.component';
import { TestScoreComponent } from './test-score/test-score.component';


export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'answer-urself', component:AnswerUrselfComponent},
    { path: 'condition/:id', component: CheckUrselfComponent },
    {path:'sign-up', component:SignUpComponent},
    {path:'condition/dementia/test', component:DementiaTestComponent},
    {path:'condition/depression/test', component:DepressionTestComponent},
    {path:'condition/gad/test', component:GadTestComponent},
    {path: 'condition/emotional-wellbeing/test', component:EmotionalWellbeingTestComponent},
    {path:'condition/health-anxiety/test', component:HealthAnxietyTestComponent},
    {path:'condition/panic-disorder/test', component:PanicDisorderTestComponent},
    {path:'condition/ocd/test', component:OcdTestComponent},
    {path: 'condition/ptsd/test', component:PtsdTestComponent},
    {path:'test-score/:illness', component:TestScoreComponent},
    {path:'**', redirectTo:'home' }
];
