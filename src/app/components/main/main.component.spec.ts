import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { reducers } from 'src/app/store/reducers';
import { MemberComponent } from '../member/member.component';
import { ResumeComponent } from '../resume/resume.component';
import { SprintComponent } from '../sprint/sprint.component';
import { TaskComponent } from '../task/task.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent, TaskComponent, MemberComponent, SprintComponent, ResumeComponent],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
