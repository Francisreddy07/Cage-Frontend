import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadTestComponent } from './gad-test.component';

describe('GadTestComponent', () => {
  let component: GadTestComponent;
  let fixture: ComponentFixture<GadTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
