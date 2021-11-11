import { createAction, props } from "@ngrx/store";

export enum sprintActionTypes {
    "create" = '[Sprint] Create',
    "update" = '[Sprint] Update',
    "remove" = '[Sprint] remove'
}


export const createSprint = createAction(sprintActionTypes.create, props<{ name: string }>())
export const updateSprint = createAction(sprintActionTypes.update, props<{ name: string, id: string }>())
export const removeSprint = createAction(sprintActionTypes.remove, props<{ id: string }>())