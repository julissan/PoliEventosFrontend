import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrareventoComponent } from './borrarevento.component';

describe('BorrareventoComponent', () => {
  let component: BorrareventoComponent;
  let fixture: ComponentFixture<BorrareventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrareventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrareventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
