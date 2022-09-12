import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = 
[
  {path:'home' , component:HomeComponent},
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'message',component:MessageComponent},
  {path:'user',component:UserComponent},
  {path:'home/user',component:UserComponent},
  {path:'userInformation',component:UserComponent},
  {path:'about' , component:AboutComponent},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
