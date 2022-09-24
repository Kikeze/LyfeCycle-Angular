import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAComponent } from './pagina-a.component';

describe('PaginaAComponent', () => {
  let component: PaginaAComponent;
  let fixture: ComponentFixture<PaginaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
