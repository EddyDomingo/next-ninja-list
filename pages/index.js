import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus similique consectetur reprehenderit ipsum ullam dolor tenetur, excepturi optio! Cum, nulla quaerat. Eum, dolorum. Quas nisi sed soluta pariatur voluptatibus.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptate doloremque placeat et explicabo ipsa cumque delectus tenetur, quia cupiditate magnam provident id nostrum aliquam numquam quis iste. Ducimus, officia?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        
      </div>
    </>
  )
}
