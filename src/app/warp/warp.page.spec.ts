import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarpPage } from './warp.page';

describe('WarpPage', () => {
  let component: WarpPage;
  let fixture: ComponentFixture<WarpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WarpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
