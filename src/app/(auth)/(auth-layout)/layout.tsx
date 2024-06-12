'use client'
import React, { useState } from 'react';
import styles from './style.module.scss';

function AuthLayout({children}: { children: React.ReactNode }) {
  return (
    <div className={styles.authPage}>
      {/*<Image className={styles.backgroundImage} src="/pizza-bg.png" width={500} height={500} alt="pizza shop background image"/>*/}
      <form className={styles.authForm}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </form>
    </div>
  );
}

export default AuthLayout;
