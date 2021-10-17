import type { NextPage } from 'next'
import React from 'react'
import Create from '../components/template/Create'
import styles from '../styles/Home.module.css'

const CreatePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Create/>
    </div>
  )
}

export default CreatePage
