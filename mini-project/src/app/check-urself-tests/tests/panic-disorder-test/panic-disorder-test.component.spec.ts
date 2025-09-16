import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicDisorderTestComponent } from './panic-disorder-test.component';

describe('PanicDisorderTestComponent', () => {
  let component: PanicDisorderTestComponent;
  let fixture: ComponentFixture<PanicDisorderTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanicDisorderTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanicDisorderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
