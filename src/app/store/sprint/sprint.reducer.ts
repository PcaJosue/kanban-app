import { createReducer, on } from "@ngrx/store";
import { Sprint } from "../model";
import { createSprint, removeSprint, updateSprint } from "./sprint.actions";

export const initialState: Sprint[] = [{
    id: '3434',
    name: 'Default',
    toDo: [],
    progress: [],
    blocked: [],
    done: []
}];

const onCreateSprint = (state, { name }) => {
    const newState = [...state];
    newState.push({
        id: '' + new Date().getTime(),
        name: name,
        toDo: [],
        progress: [],
        blocked: [],
        done: []
    });
    return newState;
}

const onUpdateSprint = (state, { name, id }) => {
    const newState = JSON.parse(JSON.stringify(state));
    const sprint = newState.filter(s => s.id === id)[0];
    sprint.name = name;
    return newState;
}

const onRemoveSprint = (state, { id }) => {
    return state.filter(sprint => sprint.id !== id)
}


export const SprintReducer = createReducer(
    initialState,
    on(createSprint, onCreateSprint),
    on(updateSprint, onUpdateSprint),
    on(removeSprint, onRemoveSprint)

)


export const selectSprints = (state: any) => state.sprints;