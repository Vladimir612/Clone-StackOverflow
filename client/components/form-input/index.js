import React from 'react'
import cn from 'classnames'

import { Alert } from '../icons'

import styles from './form-input.module.css'

const FormInput = ({ label, hasError = false, errorMessage, ...props }) => {
  return (
    <div className={styles.container}>
      <label id={label} className={styles.label}>
        {label}
        <div className={styles.inputContainer}>
          <input
            className={cn(styles.input, hasError && styles.hasError)}
            htmlFor={label}
            {...props}
          />
          {hasError && <Alert className={styles.alert} />}
        </div>
      </label>
      {hasError && <p className={styles.inputMessage}>{errorMessage}</p>}
    </div>
  )
}

export default FormInput
