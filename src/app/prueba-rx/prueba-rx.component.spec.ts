import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaRxComponent } from './prueba-rx.component';

describe('PruebaRxComponent', () => {
  let component: PruebaRxComponent;
  let fixture: ComponentFixture<PruebaRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
