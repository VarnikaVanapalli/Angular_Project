import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingbusComponent } from './movingbus.component';

describe('MovingbusComponent', () => {
  let component: MovingbusComponent;
  let fixture: ComponentFixture<MovingbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingbusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
