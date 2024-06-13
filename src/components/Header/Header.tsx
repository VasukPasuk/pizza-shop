'use client'

import React from 'react';
import styles from "./style.module.scss";
import {FaCircleUser, FaPizzaSlice} from "react-icons/fa6";
import {BiCart, BiDollar} from "react-icons/bi";
import {HEADER_ICONS_SIZE} from "@/constants";
import {useAppSelector} from "@/hooks";
import {RootState} from "@/redux/store";
import Link from "next/link";

function Header() {
  const cartLength = useAppSelector((state:RootState )=> state.shop.pizzas.filter(pizza => pizza.incart).length)
  return (
    <header className={styles.headerBox}>
      <div className={styles.logoTextBox}>
        <FaPizzaSlice/>
        <div className={styles.logoText}>
          <h1>PIZZA PARADISE </h1>
          <h3>Your Slice of Heaven, Every Bite Divine</h3>
        </div>
      </div>
      <ul className={styles.buttonsGroup}>
        <button className={styles.balanceBtn}>
          <div className={styles.currentBalance}>
            15
          </div>
          <BiDollar size={HEADER_ICONS_SIZE - 4}/>
        </button>
        <div className={styles.verticalLine}>
          |
        </div>
        <button className={styles.cartBtn}>
          <Link href={'/cart'}>
            <BiCart size={HEADER_ICONS_SIZE}/>
            <div className={styles.amountLabel}>
              {cartLength}
            </div>
          </Link>
        </button>
        <div className={styles.verticalLine}>
          |
        </div>
        <button className={styles.userBtn}>
          <FaCircleUser size={HEADER_ICONS_SIZE}/>
        </button>
      </ul>
    </header>
  );
}

export default Header;