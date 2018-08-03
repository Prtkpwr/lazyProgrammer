import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeTimeComponent } from './home-time/home-time.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'gohome', pathMatch:'full'},
      { path: 'gohome', component: HomeTimeComponent },
      {path:'**',redirectTo:'gohome', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
