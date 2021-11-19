import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MemberComponent } from './components/member/member.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { TaskComponent } from './components/task/task.component';
import { reducers } from './store/reducers';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MainComponent, TaskComponent, MemberComponent, SprintComponent, ResumeComponent],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});