import React from 'react'
import styles from "../styles/Home.module.css";
// import Azukinft from '../Assets/Azukinft.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.header}>
     <div className={styles.logo}>
       <Image src='/Azukinft.png'
       width='50'
       height='50'
       className={styles.img}
       alt='image'
       />
       <Image
        src='/Azuki-logo2.png'
        width='150'
        height='150'
        alt='image'
       />
     </div>
     <div className={styles.heading}>
        <h1>azuki nft collection</h1>
     </div>
    </div>
  )
}

export default Header
