import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'form-one', component: FormOneComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: 'form-three', component: FormThreeComponent },
  // Add more routes for additional forms here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
