export interface Todo {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    priority: number;
    completed: boolean;
}

export enum Priority {
    'Low' = 1,
    'Middle' = 2,
    'High' = 3
}