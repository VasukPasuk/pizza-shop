import {ReactElement} from "react";

type TSelectStates = {
  category: boolean,
  sort: boolean,
  filter: boolean,
}

type DropDown = {
  name: string
  leftIcon: ReactElement<SVGElement>,
  stateProp: keyof TSelectStates,
}

type sortRule = 'cheap-to-expansive' | 'expansive-to-cheap' | 'a-Z' | 'Z-a' | "normal";


export type {DropDown, TSelectStates, sortRule};