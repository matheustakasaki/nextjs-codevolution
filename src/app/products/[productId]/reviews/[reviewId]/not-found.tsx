"use client"
import { NextPage } from 'next'
import { usePathname } from 'next/navigation'

interface Props {}

// Creating custom not found page for review details page. This will be used when we call notFound() in the page.tsx file of review details page. This will override the default not-found.tsx page in the root directory and will be used only for this specific route.
const NotFound: NextPage<Props> = ({}) => {

    const pathname = usePathname();

    const reviewId = pathname.split('/')[4];
    const productId = pathname.split('/')[2];
    
    return <h1>Review {reviewId} not found for Product {productId}</h1>
}

export default NotFound