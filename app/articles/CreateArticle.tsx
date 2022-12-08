'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateArticle(){

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function createNewArticle(x: any) {
        x.preventDefault()
        const fetchedData = await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
         })

        const data = await fetchedData.json()
        

        setTitle("")
        setContent("")

        router.refresh()
        router.push(`/articles/${data.id}`, )
         
    }

    return (
        <form onSubmit={createNewArticle}>
            <h3>Create an Article</h3>
            <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Your article content" value={content} onChange={e => setContent(e.target.value)}></textarea>
            <button type="submit">Create Article</button>
        </form>
    )
}