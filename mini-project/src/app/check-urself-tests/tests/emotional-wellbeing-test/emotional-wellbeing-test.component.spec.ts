import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalWellbeingTestComponent } from './emotional-wellbeing-test.component';

describe('EmotionalWellbeingTestComponent', () => {
  let component: EmotionalWellbeingTestComponent;
  let fixture: ComponentFixture<EmotionalWellbeingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionalWellbeingTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionalWellbeingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
