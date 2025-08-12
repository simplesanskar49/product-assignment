interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
    description?: string;
}

export type { Product }