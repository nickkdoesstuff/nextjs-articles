import CreateArticle from './articles/CreateArticle'
import '../styles/globals.css'

export default function HomePage() {

    return(
        <div>
            <h1>Welcome, dear user!</h1>
            <p>Let's create an article</p>

            <CreateArticle />
        </div>
    )
}