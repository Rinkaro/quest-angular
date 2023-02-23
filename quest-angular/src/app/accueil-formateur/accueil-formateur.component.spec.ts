import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFormateurComponent } from './accueil-formateur.component';

describe('AccueilFormateurComponent', () => {
  let component: AccueilFormateurComponent;
  let fixture: ComponentFixture<AccueilFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
