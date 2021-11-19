import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Personal Kanban App';

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.subscribe((data: any) => {
      localStorage.setItem('members', JSON.stringify(data.members))
      localStorage.setItem('sprints', JSON.stringify(data.sprints))
    })
  }
}
