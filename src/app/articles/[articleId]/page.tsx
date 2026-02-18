import Link from 'next/link';

export default async function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "fr" }>
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;


    return (
        <>
            <h1>News Article id: {articleId}</h1>
            <p>reading in language: {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
            </div>
        </>
    )
}