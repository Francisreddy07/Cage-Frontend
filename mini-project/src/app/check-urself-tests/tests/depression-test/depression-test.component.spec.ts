import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionTestComponent } from './depression-test.component';

describe('DepressionTestComponent', () => {
  let component: DepressionTestComponent;
  let fixture: ComponentFixture<DepressionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepressionTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepressionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
