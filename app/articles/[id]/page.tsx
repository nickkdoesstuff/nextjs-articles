async function getArticle(id: any) {
    const fetchedData = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${id}`,
        { next: { revalidate: 60 } }
    )

    const data = await fetchedData.json()
    return data
}

export default async function ViewArticle({ params }: any) {

    const article = await getArticle(params.id)

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}