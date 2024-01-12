import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabAddPage } from './tab-add.page';

describe('TabAddPage', () => {
  let component: TabAddPage;
  let fixture: ComponentFixture<TabAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
