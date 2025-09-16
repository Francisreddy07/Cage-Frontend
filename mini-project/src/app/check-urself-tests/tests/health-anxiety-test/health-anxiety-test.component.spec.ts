import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAnxietyTestComponent } from './health-anxiety-test.component';

describe('HealthAnxietyTestComponent', () => {
  let component: HealthAnxietyTestComponent;
  let fixture: ComponentFixture<HealthAnxietyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthAnxietyTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAnxietyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
