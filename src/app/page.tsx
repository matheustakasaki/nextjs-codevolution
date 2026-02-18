// Import Links from next/link
import Link from 'next/link'

export default function Home() {

    return (

        <>
            <h1>Welcome</h1>
            <Link href="/about">Go to About Page</Link>
            <Link href="/products">Go to Products Page</Link>
        </>
    )
}
