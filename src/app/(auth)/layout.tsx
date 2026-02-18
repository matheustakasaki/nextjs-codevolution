"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { useState } from 'react';

const navLinks = [
    { href: '/login', name: 'Login' },
    { href: '/register', name: 'Register' },
    { href: '/forgot-password', name: 'Forgot Password' },
];


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    console.log('Current Pathname:', pathname);
    return (
       <>
         <div>

            {
                navLinks.map((link) => {
                    const isactive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                    return (
                        <Link key={link.href} href={link.href} style={{ marginRight: '1rem', fontWeight: isactive ? 'bold' : 'normal' }}
                        className={isactive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            {children}
        </div>
       </>
    )
}