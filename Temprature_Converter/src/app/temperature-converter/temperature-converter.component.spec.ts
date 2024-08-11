import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverter } from './temperature-converter.component';

describe('TemperatureConverterComponent', () => {
  let component: TemperatureConverter;
  let fixture: ComponentFixture<TemperatureConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureConverter]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
