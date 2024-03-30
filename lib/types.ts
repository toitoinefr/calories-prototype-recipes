export type Product = {
    id: number
    name: string
    calories: number
}

export interface Recipe {
    id: number;
    name: string;
    products: ProductInRecipe[];
}

// Définition du type ProductInRecipe
export interface ProductInRecipe {
    id: number;
    recipe: Recipe;
    product: Product;
    quantity: number;
}