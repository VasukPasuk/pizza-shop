'use client'
import React, {useState} from 'react';
import styles from "./style.module.scss";
import {FaAngleDown} from "react-icons/fa6";
import {DropDown, TSelectStates} from "@/types";
import {MdCategory} from "react-icons/md";
import {FaExchangeAlt, FaFilter} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {RootState} from "@/redux/store";
import {setCategoryRule} from "@/redux/Slices/shop.slice";

const DROP_DOWN: Array<DropDown> = [
  {
    name: 'Categories',
    leftIcon: <MdCategory/>,
    stateProp: 'category',
  },
  {
    name: 'Sort by',
    leftIcon: <FaExchangeAlt style={{transform: "rotate(90deg)"}}/>,
    stateProp: 'sort',
  },
  // {
  //   name: 'Filters',
  //   leftIcon: <FaFilter/>,
  //   stateProp: 'filter',
  // }
]

function FilterBar() {
  const [selectStates, setSelectStates] = useState<TSelectStates>({
    category: false,
    sort: false,
    filter: false,
  })
  const dropDownHandler = (prop: keyof TSelectStates) => () => {
    setSelectStates(prev => ({...prev, [prop]: !prev[prop]}));
  }
  const {categories, pizzas, categoryRule} = useAppSelector((state: RootState) => state.shop)

  const dispatch = useAppDispatch();

  const totalPizzaAmount = () => {
    if (categoryRule.includes("All")) {
      return pizzas.length;
    }
    return pizzas.filter((pizza) => pizza.category.includes(categoryRule)).length
  }

  return (
    <section className={styles.filterBox}>
      <ul className={styles.dropDownFilters}>
        {DROP_DOWN.map((data, index) => (
          <li
            key={data.stateProp}
            onClick={dropDownHandler(data.stateProp)}
          >
            {data.leftIcon}
            {data.name}
            <FaAngleDown style={selectStates[data.stateProp] ? {transform: "rotate(180deg"} : {}}/>
            {index === 0 && (selectStates[data.stateProp] && (
              <ul className={styles.optionBox}>
                {categories.map((category, index) => (
                  <li
                    key={category}
                    onClick={() => {
                      dispatch(setCategoryRule(category));
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            ))}
            {index === 1 && (selectStates[data.stateProp] && (
              <ul className={styles.optionBox}>
                <li> Option</li>
                <li> Option</li>
                <li> Option</li>
                <li> Option</li>
                <li> Option</li>
              </ul>
            ))}
          </li>
        ))}


      </ul>
      <span className={styles.amountLabel}>
        Total: {totalPizzaAmount()}
      </span>
    </section>
  );
}

export default FilterBar;