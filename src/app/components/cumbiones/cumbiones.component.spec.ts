import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumbionesComponent } from './cumbiones.component';

describe('CumbionesComponent', () => {
  let component: CumbionesComponent;
  let fixture: ComponentFixture<CumbionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumbionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumbionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
