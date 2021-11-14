import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material/material.module';
import { reducers } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintComponent } from './components/sprint/sprint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberComponent } from './components/member/member.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SprintComponent,
    MemberComponent,
    ResumeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
