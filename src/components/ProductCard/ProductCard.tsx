'use client';
import React, {useState} from 'react';
import {IPizza} from "@/interfaces";
import styles from './style.module.scss';
import Image from "next/image";
import {FaPlus} from "react-icons/fa6";
import {FaInfo} from "react-icons/fa";
import {Bounce, toast} from "react-toastify";
import {useAppDispatch} from "@/hooks";
import {addToCart, removeFromCart} from "@/redux/Slices/shop.slice";
import {RxCross2} from "react-icons/rx";

type TSize = 'small' | 'medium' | 'big'

const sizes: TSize[] = ['small', 'medium', 'big']

function ProductCard(props: { product: IPizza }) {
  const {category, name, image, ingredients, price} = props.product;
  const dispatch = useAppDispatch();
  const [activeRecipe, setActiveRecipe] = useState<boolean>(false)
  const [inCart, setInCart] = useState<boolean>(false)
  const [currentSize, setCurrentSize] = useState<TSize>('medium')
  return (
    <li className={styles.productCard}>
      <div className={styles.productImageBox}>
        <Image src={"/" + image} width={150} height={150} alt={"product card image"}/>
      </div>
      <div className={styles.rightPart}>
        <div>
          <div className={styles.nameBox}>
            <h1 className={styles.nameLabel}>
              {name}
            </h1>
            <h2 className={styles.categoryLabel}>
              {category}
            </h2>
          </div>

          <div className={styles.ingredientsBtn}>
            <FaInfo/>
            <div
              data-active={activeRecipe}
              className={styles.ingredientsList}>
              {ingredients}
            </div>
          </div>
        </div>
        <div>
          {sizes.map((label, index) => (
            <button
              onClick={() => {
                setCurrentSize(prevState => label)
                toast.success(`Pizza's size is ${label} now`, {
                  position: 'bottom-left',
                  autoClose: 1500,
                  closeOnClick: true,
                  transition: Bounce,
                });
              }}
              data-active={currentSize === label}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <div className={styles.priceLabel}>
            {price} $
          </div>
          <button onClick={() => {
            toast.success(`Pizza has been successfully ${inCart ? 'removed from' : 'added to'} cart`, {
              position: 'bottom-left',
              autoClose: 3000,
              closeOnClick: true,
              transition: Bounce,
              theme: 'light'
            });
            setInCart(prev => !prev)
            if (inCart) {
              dispatch(removeFromCart({productName: name}))
            } else {
              dispatch(addToCart({productName: name}))
            }

          }}>
            {inCart ? <RxCross2/> : <FaPlus/>}
            <span> {inCart ? "Remove" : "Add to cart"} </span>
          </button>
        </div>
      </div>

    </li>
  );
}

export default ProductCard;