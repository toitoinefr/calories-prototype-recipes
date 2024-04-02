interface Product {
    id: number;
    name: string;
    category?: ProductCategory;
    categoryId?: number | null;
    calories: number;
    fat?: number | null;
    fatSaturated?: number | null;
    carbohydrates?: number | null;
    sugar?: number | null;
    fibres?: number | null;
    salt?: number | null;
  }
  
  interface RecipeStatus {
    id: number;
    name: string;
    recipes: Recipe[];
  }
  
  interface ProductCategory {
    id: number;
    name: string;
    products: Product[];
  }
  
  interface Recipe {
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
  
  interface Step {
    id: number;
    recipe: Recipe;
    recipeId: number;
    order: number;
    content: string;
  }
  
  interface RecipeCategory {
    id: number;
    name: string;
    recipes: Recipe[];
  }
  
  interface ProductInRecipe {
    id: number;
    recipe: Recipe;
    recipeId: number;
    product: Product;
    productId: number;
    quantity: number;
  }
  