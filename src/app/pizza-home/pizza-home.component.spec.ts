import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaHomeComponent } from './pizza-home.component';

describe('PizzaHomeComponent', () => {
  let component: PizzaHomeComponent;
  let fixture: ComponentFixture<PizzaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
