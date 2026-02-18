import { resolve } from 'path';

export const metadata = {
    title: 'About',
    description: 'This is the about page',
}

export default async function About() {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Loading complete');
        }, 2000);
    });

    return(
        <>
             <h1>Blog</h1>
        </>
    )
}