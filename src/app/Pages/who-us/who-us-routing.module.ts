import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoUsComponent } from './who-us/who-us.component';

const routes: Routes = [
  {path: '', component: WhoUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoUsRoutingModule { }
