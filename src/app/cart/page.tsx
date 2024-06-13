'use client'
import React from 'react';
import styles from './style.module.scss';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {useAppSelector} from "@/hooks";
import {RootState} from "@/redux/store";
import UserCartCard from "@/components/UserCartCard/UserCartCard";

function Page() {
  const cart = useAppSelector((state:RootState) => state.shop.pizzas.filter(pizza => pizza.incart))
  return (
    <div className={styles.cartPage}>
      <main className={styles.contentBox}>
        <Header/>
        <section className={styles.cartToolbar}>

        </section>
        <section className={styles.cartSection}>
          {cart.map((pizza) => (
            <UserCartCard key={pizza.name} pizza={pizza}/>
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Page;