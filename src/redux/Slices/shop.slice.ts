import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sortRule} from "@/types";
import {IShop, IPizza} from "@/interfaces";

const pizzas: IPizza[] = [
  {
    price: 10,
    category: "Meat",
    name: "Pepperoni",
    ingredients: "pepperoni, cheese, tomato sauce",
    image: "pizza-image.png"
  },
  {
    price: 15,
    category: "Vegetarian",
    name: "Margherita",
    ingredients: "cheese, tomatoes, basil, tomato sauce",
    image: "pizza-image.png"
  },
  {
    price: 25,
    category: "Meat",
    name: "Four Cheese",
    ingredients: "mozzarella, gorgonzola, parmesan, emmental, tomato sauce",
    image: "pizza-image.png"
  },
  {
    price: 17,
    category: "Spicy",
    name: "Diablo",
    ingredients: "pepperoni, jalapenos, red onion, cheese, tomato sauce",
    image: "pizza-image.png"
  },
  {
    price: 19,
    category: "Seafood",
    name: "Seafood Cocktail",
    ingredients: "shrimp, mussels, squid, cheese, tomato sauce",
    image: "pizza-image.png"
  }
];

for (let i = 5; i < 50; i++) {
  pizzas.push({
    price: 10 + (i) % 100, // Random price between 250 and 350
    category: ["Meat", "Vegetarian", "Spicy", "Seafood"][(i % 4)],
    name: `Pizza ${i + 1}`,
    ingredients: `ingredients shrimp, mussels, squid, cheese, tomato sauce`,
    image: "pizza-image.png"
  });
}


const initialState: IShop = {
  pizzas: pizzas,
  categories: ["Meat", "Spicy", "Vegetarian", "Seafood"],
  sortRule: "normal",
  categoryRule: null,
  cart: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSortRule: (state, action: PayloadAction<sortRule>) => {
      state.sortRule = action.payload;
    },
    setCategoryRule: (state, action: PayloadAction<string | null>) => {
      state.categoryRule = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    addToCart: (state, action: PayloadAction<{ productName: string }>) => {
      state.cart = [...state.cart, action.payload.productName];
    },
    removeFromCart: (state, action: PayloadAction<{ productName: string }>) => {
      state.cart = [...state.cart].filter(name => name !== action.payload.productName);
    }
  }
});


export const {
  setSortRule,
  setCategoryRule,
  clearCart,
  addToCart,
  removeFromCart
} = shopSlice.actions

export default shopSlice.reducer;
