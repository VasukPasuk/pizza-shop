'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Link from "next/link";
import {FaMailBulk} from "react-icons/fa";
import {FaEye, FaEyeSlash} from "react-icons/fa6";

function Page() {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false)
  const iconSwitchClick = () => setVisiblePassword(prev => !prev)
  return (
    <>
      <div className={styles.formTitleBox}>
        <h2>
          Login
        </h2>
      </div>
      <div className={styles.formInputsBox}>
        <div className={styles.emailInput}>
          <input placeholder="Email" type="email"/>
          <FaMailBulk/>
        </div>
        <div className={styles.passwordInput}>
          <input placeholder="Password" type={visiblePassword ? 'text' : 'password'}/>
          {visiblePassword ? <FaEye onClick={iconSwitchClick}/> : <FaEyeSlash onClick={iconSwitchClick}/>}
        </div>
      </div>
      <div className={styles.formCheckboxBox}>
        <div>
          <input type="checkbox" id="formCheckbox"/>
          <label htmlFor="formCheckbox">
            Remember me
          </label>
        </div>
        <div>
          <Link href={'/register'}> Forgot password? </Link>
        </div>
      </div>
      <button
        type="submit"
        className={styles.formButton}
      >
        Login
      </button>
      <div className={styles.registerLinkBox}>
        <span>Don't have an account?</span> <Link href={"/register"} className={styles.registerLink}> Register </Link>
      </div>
    </>
  )
}

export default Page;