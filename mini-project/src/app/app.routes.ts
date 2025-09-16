import { Routes } from '@angular/router';
import { CheckUrselfComponent } from './check-urself/check-urself.component';
import { HomeComponent } from './home/home.component';
import { AnswerUrselfComponent } from './answer-urself/answer-urself.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DementiaTestComponent } from './check-urself-tests/tests/dementia-test/dementia-test.component';
import { DepressionTestComponent } from './check-urself-tests/tests/depression-test/depression-test.component';
import { GadTestComponent } from './check-urself-tests/tests/gad-test/gad-test.component';
import { EmotionalWellbeingTestComponent } from './check-urself-tests/tests/emotional-wellbeing-test/emotional-wellbeing-test.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'answer-urself', component:AnswerUrselfComponent},
    { path: 'condition/:id', component: CheckUrselfComponent },
    {path:'sign-up', component:SignUpComponent},
    {path:'condition/dementia/test', component:DementiaTestComponent},
    {path:'condition/depression/test', component:DepressionTestComponent},
    {path:'condition/gad/test', component:GadTestComponent},
    {path: 'condition/emotional-wellbeing/test', component:EmotionalWellbeingTestComponent}
];
