export interface Sprint {
    id: string
    name: string
    toDo: Task[]
    progress: Task[]
    blocked: Task[]
    done: Task[]
}

export interface Task {
    name: string
    from: Date
    to: Date
    description: string
    steps: Step[]
    member: Member[]

}

export interface Step {
    done: boolean,
    name: string
}

export interface Member {
    name: string
}

