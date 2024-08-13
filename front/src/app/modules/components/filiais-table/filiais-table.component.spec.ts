import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliaisTableComponent } from './filiais-table.component';

describe('FiliaisTableComponent', () => {
  let component: FiliaisTableComponent;
  let fixture: ComponentFixture<FiliaisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiliaisTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliaisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
