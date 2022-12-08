import Link from 'next/link'
import styles from '../../styles/ArticlePage.module.css'

async function fetchArticles() {
    const fetchedData = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30`,
        { cache: 'no-store' }
    )
    const data = await fetchedData.json()
    return data.items
}

export default async function ArticlePage() {

    const allArticles = await fetchArticles()

    return (
        <div>
            <h1>View all articles</h1>
            <div>
                {
                    allArticles.map((x: any ) => {
                        return <Article article={x} key={x.id} />
                    })
                }
            </div>
        </div>
    )
}

function Article({ article }: any) {

    const { title, id } = article || {} 

    return (
        <div className={styles.articleDiv}>
            <h3>{title}</h3>
            <Link href={`/articles/${id}`}><button>View Article</button></Link>
        </div>
    )
}