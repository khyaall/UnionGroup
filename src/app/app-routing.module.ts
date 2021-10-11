import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome-page',
    loadChildren: ()=> import('./Pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./Pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'ourMission',
    loadChildren: ()=> import('./Pages/our-mission/our-mission.module').then(m => m.OurMissionModule)
  },
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
