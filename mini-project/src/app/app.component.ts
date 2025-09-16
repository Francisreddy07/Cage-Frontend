import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { CheckUrselfComponent } from "./check-urself/check-urself.component";
import { DementiaTestComponent } from "./check-urself-tests/tests/dementia-test/dementia-test.component";
import { DepressionTestComponent } from "./check-urself-tests/tests/depression-test/depression-test.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;

  }


