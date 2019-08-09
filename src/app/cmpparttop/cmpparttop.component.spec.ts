import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpparttopComponent } from './cmpparttop.component';

describe('CmpparttopComponent', () => {
  let component: CmpparttopComponent;
  let fixture: ComponentFixture<CmpparttopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpparttopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpparttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
