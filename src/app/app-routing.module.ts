import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormFourComponent } from './form-four/form-four.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'form-one', component: FormOneComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: 'form-three', component: FormThreeComponent },
  { path: 'form-four', component: FormFourComponent },
  // Add more routes for additional forms here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
