import Link from 'next/link'

export default function Error() {

    return(
        <div>
            <h1>Uh oh, this doesn't look right...</h1>
            <Link href="/"><button></button></Link>
        </div>
    )

}