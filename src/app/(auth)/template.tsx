'use client';
import { useState } from 'react';

export default function TemplatePage({ children }: { children: React.ReactNode }) {
    const [input, setInput] = useState('');
    return (
        <>
            <h1>Template Page</h1>

            <section className='bg-orange-200 p-6'>
                <h2>Page Content</h2>
                {children}
            </section>
            <div className='p-4 bg-slate-300'>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </>
    )
}