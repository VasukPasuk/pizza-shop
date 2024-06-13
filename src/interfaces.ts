import {sortRule, TCategoryRule, TSize} from './types';

export interface IPizza {
  price: number;
  category: string;
  name: string;
  ingredients: string;
  image: string;
  incart: boolean;
  userCart: {
    amount: number;
    size: TSize;
  }
}

export interface IShop {
  pizzas: Array<IPizza>;
  categories: Array<string>;
  sortRule: sortRule;
  categoryRule: TCategoryRule;
}
