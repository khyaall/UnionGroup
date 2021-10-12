import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'welcome-page',
  //   loadChildren: ()=> import('./Pages/home-page/home-page.module').then(m => m.HomePageModule)
  // },
  {
    path: 'home',
    loadChildren: ()=> import('./Pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'ourMission',
    loadChildren: ()=> import('./Pages/our-mission/our-mission.module').then(m => m.OurMissionModule)
  },
  {
    path: 'contactUs',
    loadChildren: ()=> import('./Pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'whoUs',
    loadChildren: ()=> import('./Pages/who-us/who-us.module').then(m => m.WhoUsModule)
  },
  {
    path: 'products',
    loadChildren: ()=> import('./Pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
