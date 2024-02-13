import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarsComponent } from './electric-cars.component';

describe('ElectricCarsComponent', () => {
  let component: ElectricCarsComponent;
  let fixture: ComponentFixture<ElectricCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
