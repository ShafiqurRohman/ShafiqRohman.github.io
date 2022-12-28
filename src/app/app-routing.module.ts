import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileShowComponent } from './profile-info/profile-show/profile-show.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
