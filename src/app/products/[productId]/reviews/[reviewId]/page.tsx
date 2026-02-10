export default async function ReviewDetails(
    {params}: {
        params : Promise<{productId: string, reviewId: string}>;
    }
) {
    const {productId, reviewId} = await params;
    
    return <h1>Review Details for Product {productId} and Review {reviewId}</h1>
}