
// This is the page component for the dynamic route /products/[productId]. It receives the productId as a parameter and displays it on the page. It will be wrapped by the ProductDetailsLayout defined in layout.tsx, which adds a section for featured products below the product details.
export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;

    return <h1>Product Details for ID: {productId}</h1>
}