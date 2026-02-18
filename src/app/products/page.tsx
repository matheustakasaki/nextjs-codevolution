import Link from 'next/link'

export default function ProductList() {

    const productId = 1;
    return (
        <>
            <h1>Product List</h1>
            <Link href="/">Home</Link>
            <h2>
                {/* Dynamic Link */}
                <Link href={`/products/${productId}`}>Product 1</Link>
            </h2>
            <h2>
                <Link href="/products/2">Product 2</Link>
            </h2>
            <h2>
                <Link href="/products/3" replace>Product 3</Link>
            </h2>
        </>
    )
}