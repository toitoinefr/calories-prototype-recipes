export interface Product {
  id: number;
  name: string;
  category?: ProductCategory | null;
  categoryId?: number | null;
  calories: number;
  fat?: number | null;
  fatSaturated?: number | null;
  carbohydrates?: number | null;
  sugar?: number | null;
  fibres?: number | null;
  salt?: number | null;
}

export interface RecipeStatus {
  id: number;
  name: string;
  recipes: Recipe[];
}

export interface ProductCategory {
  id: number;
  name: string;
  products?: Product[];
}

export interface Recipe {
  id: number;
  name: string;
  description: string | null;
  steps: Step[];
  duration?: number | null;
  difficulty?: number | null;
  totalCalories?: number | null;
  totalProteins?: number | null;
  status: RecipeStatus;
  statusId: number;
  products: ProductInRecipe[];
  tags: string[];
  category?: RecipeCategory | null;
  categoryId?: number | null;
  slug?: string | null;
  link?: string | null;
}

export interface Step {
  id: number;
  recipe: Recipe;
  recipeId: number;
  order: number;
  content: string;
}

export interface RecipeCategory {
  id: number;
  name: string;
  recipes: Recipe[];
}

export interface ProductInRecipe {
  id: number;
  recipe: Recipe;
  recipeId: number;
  product: Product;
  productId: number;
  quantity: number;
}
