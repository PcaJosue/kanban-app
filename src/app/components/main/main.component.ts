import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Sprint, Task } from 'src/app/store/model';
import { updateSprintList } from 'src/app/store/sprint/sprint.actions';
import { selectSprints } from 'src/app/store/sprint/sprint.reducer';
import { MemberComponent } from '../member/member.component';
import { SprintComponent } from '../sprint/sprint.component';
import { TaskComponent } from '../task/task.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sprintSelected: Sprint
  sprints$ = this.store.select(selectSprints);
  idSelected: string;
  constructor(
    private store: Store,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sprints$.subscribe(data => {
      if (data) {
        this.idSelected = this.idSelected ? this.idSelected : JSON.parse(JSON.stringify(data[0])).id
        this.sprintSelected = JSON.parse(JSON.stringify(data.filter(s => s.id === this.idSelected)[0]))
      }
    })
  }

  drop(event: CdkDragDrop<Task[]>, status) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.store.dispatch(updateSprintList({ sprint: this.sprintSelected }))
  }

  openCreateTask() {
    this.dialog.open(TaskComponent, {
      height: '100h',
      width: '60%',
      data: { task: null, id: this.idSelected }
    });
  }

  sprints() {
    this.dialog.open(SprintComponent, {
      height: '95vh',
      width: '60%',
    });
  }
  members() {
    this.dialog.open(MemberComponent, {
      height: '95vh',
      width: '60%',
    });
  }

  changeSprint() {
    this.sprints$.pipe(first()).subscribe(sprints => {
      this.sprintSelected = sprints.filter(s => s.id === this.idSelected)[0]
    })
  }

}
