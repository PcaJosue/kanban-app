import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, selectSprints } from "src/app/store/sprint/sprint.reducer";
import { MaterialModule } from "src/app/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MemberComponent } from './member.component';


export default {
    component: MemberComponent,
    decorators: [
        moduleMetadata({
            declarations: [MemberComponent],
            imports: [CommonModule, MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
            providers: [provideMockStore({
                initialState: {
                    sprints: [],
                    members: [{ name: 'Josue', id: 111 }, { name: 'Alexander', id: 222 }, { name: 'Lizeth', id: 333 }]
                },
            })]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Member',
} as Meta

const Template: Story<MemberComponent> = args => ({
    component: MemberComponent,
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {}
