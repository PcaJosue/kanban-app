import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createMember, removeMember, updateMember } from 'src/app/store/member/member.actions';
import { selectMembers } from 'src/app/store/member/member.reducer';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {


  newMember = new FormControl('');
  constructor(public store: Store,
    public dialogRef: MatDialogRef<MemberComponent>) { }


  members$ = this.store.select(selectMembers);
  members: any;

  ngOnInit(): void {
    this.members$.subscribe(data => {
      this.members = data.map(member => ({ ...member, editing: false }))
    })
  }

  save(member) {
    member.editing = false
    this.store.dispatch(updateMember({ name: member.name, id: member.id }));
  }

  remove(member) {
    member.editing = false;
    this.store.dispatch(removeMember({ id: member.id }))

  }

  addMember() {
    if (this.newMember.value?.trim().length > 0) {
      this.store.dispatch(createMember({ name: this.newMember.value }))
      this.newMember.reset();
    }
    else return
  }

}
