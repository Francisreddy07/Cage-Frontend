import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiaTestComponent } from './dementia-test.component';

describe('DementiaTestComponent', () => {
  let component: DementiaTestComponent;
  let fixture: ComponentFixture<DementiaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DementiaTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DementiaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
