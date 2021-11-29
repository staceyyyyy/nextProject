import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Home({ posts }) {
  // console.log("post",posts)
  return (
    <div>
      <Head>
        <title>NEXT MENU</title>
      </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          NEXT RESTAURANT MENU CATEGORY
        </h1>
        <p className={styles.description}>
          Created by:<code className={styles.code}>Stacey</code>
        </p>
        <div className={styles.container}> 
          {posts.map((post)=> (
            <Link href={`/post/${post.strCategory}`} key={post.idCategory}>
            <div className={styles.grid} className={styles.card}>
              <h2>{post.strCategory}</h2>
              <Image 
                src={post.strCategoryThumb}
                width={300}
                height={300}
              />
            </div>
              </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  const data = await res.json()
  // console.log("data",data)
  return {
    props: { posts: data.categories }, // will be passed to the page component as props
  }
  
}

export default Home