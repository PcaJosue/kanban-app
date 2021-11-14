import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Sprint, Task } from 'src/app/store/model';
import { selectSprints } from 'src/app/store/sprint/sprint.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sprintSelected: Sprint
  sprints$ = this.store.select(selectSprints);
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sprints$.subscribe(data => {
      if (data) {
        this.sprintSelected = JSON.parse(JSON.stringify(data[0]))
      }
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
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
  }

}
