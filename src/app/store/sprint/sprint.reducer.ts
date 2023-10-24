import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Sprint } from "../model";
import { addTask, createSprint, removeSprint, updateSprint, updateSprintList, updateTask,removeTask } from "./sprint.actions";

export const initialState: Sprint[] = [{
    id: new Date().getTime().toString(),
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

const onUpdateSprintList = (state, { sprint }) => {
    const sprints = state.filter(s => s.id !== sprint.id)
    sprints.push(sprint)
    return sprints
}

const onRemoveTask = (state, { task,id }) => {
  const sprint: Sprint = JSON.parse(JSON.stringify(state.filter(s => s.id === id)[0]))
  const sprints: Sprint[] = JSON.parse(JSON.stringify(state.filter(s => s.id !== id)))
  const lists = ['toDo', 'progress', 'blocked', 'done']

    for (let key of lists) {
        let foundTaskIndex = Array(...sprint[key]).findIndex(t => t.id === task.id)
        if (foundTaskIndex >= 0) {
            sprint[key].splice(foundTaskIndex,1);
            break;
        }
    }
    sprints.push(sprint);
    return sprints;
}

const onAddTask = (state, { task, id }) => {
    const sprint = JSON.parse(JSON.stringify(state.filter(s => s.id === id)[0]))
    sprint.toDo.push(task)
    const sprints = state.filter(s => s.id !== id)
    sprints.push(sprint);
    return sprints
}

const onUpdateTask = (state, { task, id }) => {
    const sprint: Sprint = JSON.parse(JSON.stringify(state.filter(s => s.id === id)[0]))
    const sprints: Sprint[] = JSON.parse(JSON.stringify(state.filter(s => s.id !== id)))
    const lists = ['toDo', 'progress', 'blocked', 'done']


    for (let key of lists) {
        let foundTaskIndex = Array(...sprint[key]).findIndex(t => t.id === task.id)
        if (foundTaskIndex >= 0) {
            sprint[key][foundTaskIndex] = task;
            break;
        }
    }
    sprints.push(sprint);
    return sprints;
}

const getInitialState = () => {
    let initial: any = localStorage.getItem('sprints');
    if (initial) initial = JSON.parse(initial)
    else initial = initialState

    return initial
}

export const SprintReducer = createReducer(
    getInitialState(),
    on(createSprint, onCreateSprint),
    on(updateSprint, onUpdateSprint),
    on(removeSprint, onRemoveSprint),
    on(updateSprintList, onUpdateSprintList),
    on(addTask, onAddTask),
    on(updateTask, onUpdateTask),
    on(removeTask,onRemoveTask)

)

export const selectSprints = createFeatureSelector<ReadonlyArray<Sprint>>('sprints');

