import { createAction, props } from "@ngrx/store";
import { Sprint, Task } from "../model";

export enum sprintActionTypes {
    "create" = '[Sprint] Create',
    "update" = '[Sprint] Update',
    "remove" = '[Sprint] remove',
    "Update List" = '[Sprint] update list',
    "add task" = '[Sprint] add task',
    "update task" = '[Sprint] update task',
    "remove task" = '[Sprint] remove task',
}


export const createSprint = createAction(sprintActionTypes.create, props<{ name: string }>())
export const updateSprint = createAction(sprintActionTypes.update, props<{ name: string, id: string }>())
export const removeSprint = createAction(sprintActionTypes.remove, props<{ id: string }>())
export const updateSprintList = createAction(sprintActionTypes["Update List"], props<{ sprint: Sprint }>())
export const addTask = createAction(sprintActionTypes["add task"], props<{ task: Task, id: string }>())
export const updateTask = createAction(sprintActionTypes["update task"], props<{ task: Task, id: string }>())
export const removeTask = createAction(sprintActionTypes["remove task"], props<{  task: Task, id: string }>())
