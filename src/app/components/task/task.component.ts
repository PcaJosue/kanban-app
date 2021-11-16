import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { createMember } from 'src/app/store/member/member.actions';
import { selectMembers } from 'src/app/store/member/member.reducer';
import { Member, Task } from 'src/app/store/model';
import { addTask } from 'src/app/store/sprint/sprint.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  task: Task;
  newStep = new FormControl();
  newMember = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<TaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.data.task) { }
    else {
      this.task = {
        name: null,
        from: new Date(),
        to: null,
        description: null,
        steps: [],
        member: []
      }
      this.store.select(selectMembers).subscribe(members => {
        this.task.member = JSON.parse(JSON.stringify(members))
      })
    }
  }

  addStep() {
    if (!this.newStep.value || this.newStep.value.trim().length === 0) return;
    this.task.steps.push({ name: this.newStep.value, done: false })
    this.newStep.reset();
  }

  addMember() {
    if (!this.newMember.value || this.newMember.value.trim().length === 0) return;
    this.store.dispatch(createMember({ name: this.newMember.value }))
    this.newMember.reset();
  }

  checkError(): boolean {

    if (!this.task.name) {
      this._snackBar.open('Fill Name Field', 'close');
      return true;
    } else return false


  }

  save() {
    if (this.checkError()) return;
    this.store.dispatch(addTask({ task: this.task, id: this.data.id }))
    this.dialogRef.close();

  }
}
