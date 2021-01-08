export interface Todo {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    priority: number;
    completed: boolean;
}