'use client'
import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa6";

type InputsStates = {
  firstInput: boolean,
  secondInput: boolean
}

function Page() {
  const [inputs, setInputs] = useState<InputsStates>({
    firstInput: false,
    secondInput: false
  });

  const iconSwitchClick = (prop: keyof InputsStates) => {
    return () => {
      setInputs(prev => ({
        ...prev,
        [prop]: !prev[prop]
      }));
    };
  };

  return (
    <>
      <div className={styles.formTitleBox}>
        <h2>Register</h2>
      </div>
      <div className={styles.formInputsBox}>
        <div className={styles.emailInput}>
          <input placeholder="Username" type="text"/>
          <FaUser/>
        </div>
        <div>
          <input placeholder="Email" type="email"/>
          <FaMailBulk/>
        </div>
        <div>
          <input placeholder="Password" type={inputs.firstInput ? 'text' : 'password'}/>
          {inputs.firstInput
            ? <FaEye onClick={iconSwitchClick('firstInput')}/>
            : <FaEyeSlash onClick={iconSwitchClick('firstInput')}/>
          }
        </div>
        <div className={styles.passwordInput}>
          <input placeholder="Previous password" type={inputs.secondInput ? 'text' : 'password'}/>
          {inputs.secondInput
            ? <FaEye onClick={iconSwitchClick('secondInput')}/>
            : <FaEyeSlash onClick={iconSwitchClick('secondInput')}/>
          }
        </div>
      </div>
      <div className={styles.formCheckboxBox}>
        <div>
          <input type="checkbox" id="formCheckbox"/>
          <label htmlFor="formCheckbox">Remember me</label>
        </div>
        <div>
          <Link href={'/register'}>Forgot password?</Link>
        </div>
      </div>
      <button type="submit" className={styles.formButton}>
        Register
      </button>
      <div className={styles.registerLinkBox}>
        <span>Already have an account?</span>
        <Link href={"/login"} className={styles.registerLink}>
          Login
        </Link>
      </div>
    </>
  );
}

export default Page;
