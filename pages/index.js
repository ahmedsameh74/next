import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './../comps/Navbar';
import Footer from './../comps/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
    <title>Ninja List | Home</title>
    <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa suscipit sunt repellendus vel culpa praesentium, odit cupiditate eveniet illo numquam quasi ad impedit eum, similique veniam reprehenderit quidem temporibus!</p>
      <Link href='/ninjas'><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>
  );
}
