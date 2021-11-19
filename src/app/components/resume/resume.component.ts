import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member, Task } from 'src/app/store/model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @Input('task') task: Task;
  @Input('sprintId') id: string;
  progress: number;
  members: Member[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.calculateProgress()
    this.members = this.task?.member.filter(m => m.selected)
  }

  calculateProgress() {
    this.progress = (this.task?.steps.filter(step => step.done).length / this.task?.steps.length) * 100
  }

  seeTask() {
    this.dialog.open(TaskComponent, {
      height: '100vh',
      width: '60%',
      data: { task: this.task, id: this.id }
    });
  }
}
