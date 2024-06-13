import {ReactElement} from "react";

type TSelectStates = {
  category: boolean,
  sort: boolean,
  filter: boolean,
}

type TSize = 'small' | 'medium' | 'big'


type DropDown = {
  name: string
  leftIcon: ReactElement<SVGElement>,
  stateProp: keyof TSelectStates,
}

type sortRule = 'cheap-to-expansive' | 'expansive-to-cheap' | 'a-Z' | 'Z-a' | "normal";

type TCategoryRule = "All" | string;

export type {DropDown, TSelectStates, sortRule, TCategoryRule, TSize};