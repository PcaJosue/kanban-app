import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Sprint } from "../model";
import { addTask, createSprint, removeSprint, updateSprint, updateSprintList } from "./sprint.actions";

export const initialState: Sprint[] = [{
    id: '3434',
    name: 'Default',
    toDo: [
        {
            name: 'portafolio',
            from: new Date(),
            to: new Date(),
            description: 'build portafolio',
            steps: [],
            member: [{ id: '123', name: 'Josue', selected: false }]
        },
        {
            name: 'portafolio2',
            from: new Date(),
            to: new Date(),
            description: 'build portafolio',
            steps: [],
            member: [{ id: '123', name: 'Josue', selected: false }]
        }
    ],
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

const onUpdateSprintList = (state, { sprint }) => {
    const sprints = state.filter(s => s.id !== sprint.id)
    sprints.push(sprint)
    return sprints
}

const onAddTask = (state, { task, id }) => {
    const sprint = JSON.parse(JSON.stringify(state.filter(s => s.id === id)[0]))
    sprint.toDo.push(task)
    const sprints = state.filter(s => s.id !== id)
    sprints.push(sprint);
    return sprints
}


export const SprintReducer = createReducer(
    initialState,
    on(createSprint, onCreateSprint),
    on(updateSprint, onUpdateSprint),
    on(removeSprint, onRemoveSprint),
    on(updateSprintList, onUpdateSprintList),
    on(addTask, onAddTask)

)

export const selectSprints = createFeatureSelector<ReadonlyArray<Sprint>>('sprints');
