"use client";
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';


export default function ErrorBoundary ({error, reset }: {
    error: Error,
    reset: () => void
}){
    const router = useRouter();

    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (

        <>
        <p>{error.message}</p>
        {/* try again button rerender the component */}
        <button onClick={() => reload()}>Try Again</button>
        </>
    )
}