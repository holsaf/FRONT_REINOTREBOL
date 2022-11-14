import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRegistrarComponent } from './solicitud-registrar.component';

describe('SolicitudRegistrarComponent', () => {
  let component: SolicitudRegistrarComponent;
  let fixture: ComponentFixture<SolicitudRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
