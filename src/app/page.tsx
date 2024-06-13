import React from 'react';
import styles from './style.module.scss';

import Header from "@/components/Header/Header";
import FilterBar from "@/components/FilterBar/FilterBar";
import Pagination from "@/components/Pagination/Pagination";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import Footer from "@/components/Footer/Footer";
import {useAppSelector} from "@/hooks";


function Page() {
  return (
    <div className={styles.shopPage}>
      <main className={styles.contentBox}>
        <Header/>
        <FilterBar/>
        <ProductsSection/>
        <Pagination/>
      </main>
      <Footer/>
    </div>
  );
}

export default Page;

// function ProductsWrapper({children}: {children: React.ReactNode}) {
//   const pizzas = useAppSelector((state:RootState) => )
//   return (
//
//   )
// }