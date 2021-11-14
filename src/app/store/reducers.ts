import { MemberReducer } from "./member/member.reducer";
import { SprintReducer } from "./sprint/sprint.reducer";

export const reducers = {
    sprints: SprintReducer,
    members: MemberReducer
}
