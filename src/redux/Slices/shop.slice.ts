import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sortRule, TCategoryRule, TSize} from "@/types";
import {IShop, IPizza} from "@/interfaces";

const pizzas: IPizza[] = [
  {
    price: 10,
    category: "Meat",
    name: "Pepperoni",
    ingredients: "pepperoni, cheese, tomato sauce",
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: 'medium',
    }
  },
  {
    price: 15,
    category: "Vegetarian",
    name: "Margherita",
    ingredients: "cheese, tomatoes, basil, tomato sauce",
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: 'medium',
    }
  },
  {
    price: 25,
    category: "Meat",
    name: "Four Cheese",
    ingredients: "mozzarella, gorgonzola, parmesan, emmental, tomato sauce",
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: 'medium',
    }
  },
  {
    price: 17,
    category: "Spicy",
    name: "Diablo",
    ingredients: "pepperoni, jalapenos, red onion, cheese, tomato sauce",
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: 'medium',
    }
  },
  {
    price: 19,
    category: "Seafood",
    name: "Seafood Cocktail",
    ingredients: "shrimp, mussels, squid, cheese, tomato sauce",
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: 'medium',
    }
  }
];

for (let i = 5; i < 50; i++) {
  pizzas.push({
    price: 10 + (i % 100), // Random price between 10 and 110
    category: ["Meat", "Vegetarian", "Spicy", "Seafood"][(i % 4)],
    name: `Pizza ${i + 1}`,
    ingredients: `ingredients shrimp, mussels, squid, cheese, tomato sauce`,
    image: "pizza-image.png",
    incart: false,
    userCart: {
      amount: 1,
      size: "medium"
    }
  });
}

const initialState: IShop = {
  pizzas: pizzas,
  categories: ["All", "Meat", "Spicy", "Vegetarian", "Seafood"],
  sortRule: "normal",
  categoryRule: "All",
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSortRule: (state, action: PayloadAction<sortRule>) => {
      state.sortRule = action.payload;
    },
    setCategoryRule: (state, action: PayloadAction<TCategoryRule>) => {
      state.categoryRule = action.payload;
    },
    clearCart: (state) => {
      state.pizzas.forEach(pizza => {
        pizza.incart = false;
      })
    },
    addToCart: (state, action: PayloadAction<{name: string}>) => {
      const pizza_name = action.payload.name;
      state.pizzas.forEach(pizza => {
        if (pizza.name === pizza_name) {
          pizza.incart = true;
        }
      })
    },
    removeFromCart: (state, action: PayloadAction<{ name: string }>) => {
      const pizza_name = action.payload.name;
      state.pizzas.forEach(pizza => {
        if (pizza.name === pizza_name) {
          pizza.incart = false;
        }
      })
    },
    incrementProductAmount: (state, action: PayloadAction<{ name: string }>) => {
      const pizza_name = action.payload.name;
      state.pizzas.forEach(pizza => {
        if (pizza.name === pizza_name) {
          const amount = pizza.userCart.amount
          pizza.userCart.amount = amount + 1;
        }
      })
    },
    decrementProductAmount: (state, action: PayloadAction<{ name: string }>) => {
      const pizza_name = action.payload.name;
      state.pizzas.forEach(pizza => {
        if (pizza.name === pizza_name && pizza.userCart.amount >= 2) {
          const amount = pizza.userCart.amount
          pizza.userCart.amount = amount - 1;
        }
      })
    },
  },
});

export const {
  setSortRule,
  setCategoryRule,
  clearCart,
  addToCart,
  removeFromCart,
  incrementProductAmount,
  decrementProductAmount
} = shopSlice.actions;

export default shopSlice.reducer;
