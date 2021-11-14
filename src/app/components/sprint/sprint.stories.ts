import { SprintComponent } from "./sprint.component";
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, selectSprints } from "src/app/store/sprint/sprint.reducer";
import { MaterialModule } from "src/app/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


export default {
    component: SprintComponent,
    decorators: [
        moduleMetadata({
            declarations: [SprintComponent],
            imports: [CommonModule, MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
            providers: [provideMockStore({
                initialState: {
                    sprints: initialState
                }
            })]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Sprint',
} as Meta

const Template: Story<SprintComponent> = args => ({
    component: SprintComponent,
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
Default.args = {}
