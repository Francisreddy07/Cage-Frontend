import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAnxietyTestComponent } from './social-anxiety-test.component';

describe('SocialAnxietyTestComponent', () => {
  let component: SocialAnxietyTestComponent;
  let fixture: ComponentFixture<SocialAnxietyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAnxietyTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAnxietyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
