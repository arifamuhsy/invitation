import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OpenInvitationComponent } from './main/open-invitation/open-invitation.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: 'open',
    component: OpenInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
