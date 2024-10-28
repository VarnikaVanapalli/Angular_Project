import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPackagesComponent } from './trending-packages.component';

describe('TrendingPackagesComponent', () => {
  let component: TrendingPackagesComponent;
  let fixture: ComponentFixture<TrendingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
