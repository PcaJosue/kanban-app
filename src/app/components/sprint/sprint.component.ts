import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Sprint } from 'src/app/store/model';
import { createSprint, removeSprint, updateSprint } from 'src/app/store/sprint/sprint.actions';
import { selectSprints } from 'src/app/store/sprint/sprint.reducer';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {


  newSprint = new FormControl('');
  constructor(private store: Store) { }


  sprints$ = this.store.select(selectSprints);
  sprints: Sprint & { editing: boolean }[];

  ngOnInit(): void {
    this.sprints$.subscribe(data => {
      console.log('data', data);
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
