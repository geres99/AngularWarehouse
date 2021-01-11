import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickPalletsComponent } from './brick-pallets.component';

describe('BrickPalletsComponent', () => {
  let component: BrickPalletsComponent;
  let fixture: ComponentFixture<BrickPalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickPalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickPalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
