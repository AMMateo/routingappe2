import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:"start",
        loadChildren: ()=>import("./start/start.module").then(hijo=>hijo.StartPageModule)
      },
      {
        path:"medium",
        loadChildren: ()=>import("./medium/medium.module").then(hijo=>hijo.MediumPageModule)
      },
      {
        path:"end",
        loadChildren: ()=>import("./end/end.module").then(hijo=>hijo.EndPageModule)
      },
      {
        path:"",
        redirectTo:"start",
        pathMatch:"full"
      }

    ]
  },
  {
    path:"",
    redirectTo:"tabs/start",
    pathMatch:"full"
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
