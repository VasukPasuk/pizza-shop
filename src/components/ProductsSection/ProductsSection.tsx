'use client'
import React from 'react';
import styles from './style.module.scss';
import {useAppSelector} from "@/hooks";
import {IPizza} from "@/interfaces";
import ProductCard from "@/components/ProductCard/ProductCard";
import {RootState} from "@/redux/store";

function ProductsSection() {
	const products = useAppSelector((state:RootState) => state.shop.pizzas)
  return (
		<section className={styles.productsBox}>
			<div className={styles.currentCategory}>
				All pizzas
			</div>
			<ul className={styles.productsList}>
				{[...Array(6)].map( (_, index) => (
					<ProductCard key={products[index].name} product={products[index]}/>
				))}
			</ul>
		</section>
	);
}

export default ProductsSection;