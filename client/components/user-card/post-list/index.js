import React from 'react'

import styles from './post-list.module.css'

const PostList = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default PostList
