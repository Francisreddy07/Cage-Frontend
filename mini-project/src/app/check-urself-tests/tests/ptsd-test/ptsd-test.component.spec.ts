import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsdTestComponent } from './ptsd-test.component';

describe('PtsdTestComponent', () => {
  let component: PtsdTestComponent;
  let fixture: ComponentFixture<PtsdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtsdTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtsdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
