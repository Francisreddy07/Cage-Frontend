import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcdTestComponent } from './ocd-test.component';

describe('OcdTestComponent', () => {
  let component: OcdTestComponent;
  let fixture: ComponentFixture<OcdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcdTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
