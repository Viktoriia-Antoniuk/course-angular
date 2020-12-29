export interface Product {
    name: string;
    category: Category;
    price: number;
    description: string;
}

export interface CartProduct extends Product {
    quantity: number;
}

export enum Category {
    'phone' = 1,
    'laptop' = 2,
    'tv' = 3
}

export interface Todo {
    name: string;
    complete: boolean;
}