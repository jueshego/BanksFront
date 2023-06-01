import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarCuentaComponent } from './guardar-cuenta.component';

describe('GuardarCuentaComponent', () => {
  let component: GuardarCuentaComponent;
  let fixture: ComponentFixture<GuardarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
