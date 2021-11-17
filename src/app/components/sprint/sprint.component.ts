import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createSprint, removeSprint, updateSprint } from 'src/app/store/sprint/sprint.actions';
import { selectSprints } from 'src/app/store/sprint/sprint.reducer';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {


  newSprint = new FormControl('');
  constructor(public store: Store,
    public dialogRef: MatDialogRef<SprintComponent>
  ) { }


  sprints$ = this.store.select(selectSprints);
  sprints: any;

  ngOnInit(): void {
    this.sprints$.subscribe(data => {
      this.sprints = data.map(sprint => ({ ...sprint, editing: false }))
    })
  }

  save(sprint) {
    sprint.editing = false
    this.store.dispatch(updateSprint({ name: sprint.name, id: sprint.id }));
  }

  remove(sprint) {
    sprint.editing = false;
    this.store.dispatch(removeSprint({ id: sprint.id }))

  }

  addSprint() {
    if (this.newSprint.value?.trim().length > 0) {
      this.store.dispatch(createSprint({ name: this.newSprint.value }))
      this.newSprint.reset();
    }
    else return
  }

}
