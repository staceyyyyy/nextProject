import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function CategoryDetail({detail}) {
    const router = useRouter()
    console.log(detail)
    return (
        <div className={styles.main}>
          <h1>Category Detail</h1>
          <a href="/" className={styles.ref}>Back to Menu</a>
          <div className={styles.container}>
            {detail.map((menu)=> (
              <div className={styles.grid} className={styles.card} key={menu.idMeal}>
                <h2>{menu.strMeal}</h2>
                <img src={menu.strMealThumb} className={styles.img} />
              </div>
            ))}
            </div>
        </div>
    )
}
export async function getServerSideProps (ctx) {
  console.log("ctxparam",ctx.params.categoryDetail)
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctx.params.categoryDetail}`) 
  const datas = await res.json()
  console.log("data",datas)
  return { 
    props : { detail: datas.meals }
  }
}

export default CategoryDetail
