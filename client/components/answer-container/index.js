import React from 'react'

import styles from './answer-container.module.css'

const AnswerContainer = ({ answerCount, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fill}>
          <h2>{answerCount} Answers</h2>
        </div>
      </div>
      {children}
    </div>
  )
}

export default AnswerContainer
