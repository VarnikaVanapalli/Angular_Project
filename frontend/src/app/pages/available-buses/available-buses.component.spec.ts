import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBusesComponent } from './available-buses.component';

describe('AvailableBusesComponent', () => {
  let component: AvailableBusesComponent;
  let fixture: ComponentFixture<AvailableBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
