import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Member, Sprint } from "../model";
import { createMember, removeMember, updateMember } from "./member.actions";

export const initialState: Member[] = [];

const onCreateMember = (state, { name }) => {
    const newState = [...state];
    newState.push({
        id: '' + new Date().getTime(),
        name: name,
        selected: false
    });
    return newState;
}

const onUpdateMember = (state, { name, id }) => {
    const newState = JSON.parse(JSON.stringify(state));
    const sprint = newState.filter(s => s.id === id)[0];
    sprint.name = name;
    return newState;
}

const onRemoveMember = (state, { id }) => {
    return state.filter(member => member.id !== id)
}

const getInitialState = () => {
    let initial: any = localStorage.getItem('members');
    if (initial) initial = JSON.parse(initial)
    else initial = initialState

    return initial
}


export const MemberReducer = createReducer(
    getInitialState(),
    on(createMember, onCreateMember),
    on(updateMember, onUpdateMember),
    on(removeMember, onRemoveMember)

)

export const selectMembers = createFeatureSelector<ReadonlyArray<Member>>('members');
