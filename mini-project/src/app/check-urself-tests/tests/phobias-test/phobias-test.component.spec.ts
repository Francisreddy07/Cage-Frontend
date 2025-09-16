import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhobiasTestComponent } from './phobias-test.component';

describe('PhobiasTestComponent', () => {
  let component: PhobiasTestComponent;
  let fixture: ComponentFixture<PhobiasTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhobiasTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhobiasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
