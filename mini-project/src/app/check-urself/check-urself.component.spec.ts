import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUrselfComponent } from './check-urself.component';

describe('CheckUrselfComponent', () => {
  let component: CheckUrselfComponent;
  let fixture: ComponentFixture<CheckUrselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckUrselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckUrselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
