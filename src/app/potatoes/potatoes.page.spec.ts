import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotatoesPage } from './potatoes.page';

describe('PotatoesPage', () => {
  let component: PotatoesPage;
  let fixture: ComponentFixture<PotatoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PotatoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
