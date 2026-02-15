import { notFound } from 'next/navigation';

export default async function ReviewDetails(
    {params}: {
        params : Promise<{productId: string, reviewId: string}>;
    }
) {
    const {productId, reviewId} = await params;
    
    // Simulate a not found page for reviewId greater than 1000 since we don't have that many reviews
    if(parseInt(reviewId) > 1000) {
        notFound();
    }

    return <h1>Review Details for Product {productId} and Review {reviewId}</h1>
}