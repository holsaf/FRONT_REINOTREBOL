import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudActualizarComponent } from './solicitud-actualizar.component';

describe('SolicitudActualizarComponent', () => {
  let component: SolicitudActualizarComponent;
  let fixture: ComponentFixture<SolicitudActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
