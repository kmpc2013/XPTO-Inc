import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrancheComponent } from './new-branche.component';

describe('NewBrancheComponent', () => {
  let component: NewBrancheComponent;
  let fixture: ComponentFixture<NewBrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBrancheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
