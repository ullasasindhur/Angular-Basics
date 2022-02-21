import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELementsHomeComponent } from './elements-home.component';

describe('ELementsHomeComponent', () => {
  let component: ELementsHomeComponent;
  let fixture: ComponentFixture<ELementsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELementsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELementsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
