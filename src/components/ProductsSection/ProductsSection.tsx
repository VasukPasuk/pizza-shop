'use client'
import React from 'react';
import styles from './style.module.scss';
import {useAppSelector} from "@/hooks";
import {IPizza} from "@/interfaces";
import ProductCard from "@/components/ProductCard/ProductCard";
import {RootState} from "@/redux/store";

function ProductsSection() {
	const {pizzas, categoryRule} = useAppSelector((state:RootState) => state.shop)
  return (
		<section className={styles.productsBox}>
			<div className={styles.currentCategory}>
				{categoryRule} pizzas
			</div>
			<ul className={styles.productsList}>
				{pizzas.slice(0, 6)
					.filter((pizza) => {
						return categoryRule !== "All" ? pizza.category === categoryRule : true;
					})
					.map((pizza, index) => (
					<ProductCard key={pizza.name} product={pizza}/>
				))}
			</ul>
		</section>
	);
}

export default ProductsSection;