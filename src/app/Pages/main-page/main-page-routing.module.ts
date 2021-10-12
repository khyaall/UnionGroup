import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  // {path: 'page', component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
