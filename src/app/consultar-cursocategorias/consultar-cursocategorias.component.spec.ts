import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCursocategoriasComponent } from './consultar-cursocategorias.component';

describe('ConsultarCursocategoriasComponent', () => {
  let component: ConsultarCursocategoriasComponent;
  let fixture: ComponentFixture<ConsultarCursocategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCursocategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCursocategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
