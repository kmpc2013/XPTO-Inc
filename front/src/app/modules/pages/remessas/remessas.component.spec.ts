import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemessasComponent } from './remessas.component';

describe('RemessasComponent', () => {
  let component: RemessasComponent;
  let fixture: ComponentFixture<RemessasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemessasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemessasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
