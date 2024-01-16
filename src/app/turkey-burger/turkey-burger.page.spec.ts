import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurkeyBurgerPage } from './turkey-burger.page';

describe('TurkeyBurgerPage', () => {
  let component: TurkeyBurgerPage;
  let fixture: ComponentFixture<TurkeyBurgerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TurkeyBurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
