import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorkPage } from './pork.page';

describe('PorkPage', () => {
  let component: PorkPage;
  let fixture: ComponentFixture<PorkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
