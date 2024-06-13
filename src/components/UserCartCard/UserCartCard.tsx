import React from 'react';
import styles from './style.module.scss';

import {IPizza} from "@/interfaces";
import Image from "next/image";
import {FaPlus} from "react-icons/fa6";
import {FaMinus} from "react-icons/fa";

function UserCartCard(props: {pizza: IPizza }) {
  const {name, image , category, price, userCart} = props.pizza;
  return (
    <div className={styles.cartCard}>
      <div className={styles.upperInformation}>
        <div className={styles.cardImageBox}>
          <Image src={`/${image}`} alt={`cart product card image`} width={100} height={100}></Image>
        </div>
        <div className={styles.cardInformation}>
          <h1>{name}</h1>
          <h3>Category: {category}</h3>
          <h3>Size: {userCart.size}</h3>
          <h3>Amount: {userCart.amount}</h3>
          <h3>Total price: {price * userCart.amount}</h3>
        </div>
      </div>
      <div className={styles.cardButtonsGroup}>
        <button>
          <FaPlus/>
        </button>
        <button>
          <FaMinus/>
        </button>
        <button>
          Remove
        </button>
      </div>
    </div>
  );
}

export default UserCartCard;