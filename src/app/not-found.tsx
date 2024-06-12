import React from 'react';
import styles from './not-found.style.module.scss';
import {MdReportGmailerrorred} from "react-icons/md";
import Link from "next/link";

function Custom404() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.iconBox}>
        <MdReportGmailerrorred/>
      </div>
      <div className={styles.textBox}>
        <h1>404</h1>
        <span>Sorry, page not found</span>
      </div>
      <Link
        href={'/'}
        className={styles.returnButton}
      >
        Back to home
      </Link>
    </div>
  );
}

export default Custom404;
