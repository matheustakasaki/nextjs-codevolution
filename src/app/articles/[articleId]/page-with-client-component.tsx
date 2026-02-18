"use client";
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';

export default function NewsArticle({ params, searchParams }: {
    params: { articleId: string },
    searchParams: { lang?: "en" | "fr" }
}) {
    const { articleId } = useParams();
    const lang = (useSearchParams().get("lang") as "en" | "fr") ?? "en";

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