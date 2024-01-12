import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabNotificationsPage } from './tab-notifications.page';

describe('TabNotificationsPage', () => {
  let component: TabNotificationsPage;
  let fixture: ComponentFixture<TabNotificationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
