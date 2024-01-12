import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSettingPage } from './tab-setting.page';

describe('TabSettingPage', () => {
  let component: TabSettingPage;
  let fixture: ComponentFixture<TabSettingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
