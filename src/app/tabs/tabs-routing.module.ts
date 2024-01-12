import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [
      {
        path: 'tab-setting',
        loadChildren: () => import('../tab-setting/tab-setting.module').then( m => m.TabSettingPageModule)
      },
      {
        path: 'tab-search',
        loadChildren: () => import('../tab-search/tab-search.module').then( m => m.TabSearchPageModule)
      },
      {
        path: 'tab-notifications',
        loadChildren: () => import('../tab-notifications/tab-notifications.module').then( m => m.TabNotificationsPageModule)
      },
      {
        path: 'tab-add',
        loadChildren: () => import('../tab-add/tab-add.module').then( m => m.TabAddPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
