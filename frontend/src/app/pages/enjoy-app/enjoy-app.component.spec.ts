import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyAppComponent } from './enjoy-app.component';

describe('EnjoyAppComponent', () => {
  let component: EnjoyAppComponent;
  let fixture: ComponentFixture<EnjoyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnjoyAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnjoyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
