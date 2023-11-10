import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here (for two-way binding)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormOneComponent } from './form-one/form-one.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LargeNumberPipe } from './shared/pipes/large-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormOneComponent,
    LargeNumberPipe,
  ],
  imports: [
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
