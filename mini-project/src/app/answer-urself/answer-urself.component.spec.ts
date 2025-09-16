import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerUrselfComponent } from './answer-urself.component';

describe('AnswerUrselfComponent', () => {
  let component: AnswerUrselfComponent;
  let fixture: ComponentFixture<AnswerUrselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerUrselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerUrselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
