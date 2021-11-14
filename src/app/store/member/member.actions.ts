import { createAction, props } from "@ngrx/store";

export enum MemberActionTypes {
    "create" = '[Member] Create',
    "update" = '[Member] Update',
    "remove" = '[Member] remove'
}


export const createMember = createAction(MemberActionTypes.create, props<{ name: string }>())
export const updateMember = createAction(MemberActionTypes.update, props<{ name: string, id: string }>())
export const removeMember = createAction(MemberActionTypes.remove, props<{ id: string }>())