import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemessaTableComponent } from './remessa-table.component';

describe('RemessaTableComponent', () => {
  let component: RemessaTableComponent;
  let fixture: ComponentFixture<RemessaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemessaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemessaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
