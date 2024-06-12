import {sortRule} from './types'

export interface IPizza {
  price: number,
  category: string,
  name: string,
  ingredients: string,
  image: string,
}

export interface IShop {
  pizzas: Array<IPizza>,
  categories: Array<string>,
  sortRule: sortRule,
  categoryRule: string | null,
  cart: string[] | []
}

