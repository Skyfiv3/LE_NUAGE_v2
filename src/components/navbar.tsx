"use client";

import Link from 'next/link';
import Nuage from '@/components/svg/Nuage';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-secondary shadow-md">
      <div className="flex space-x-8 items-center font-bold">
        <Link href="/" className="flex space-x-4 items-center">
          <Nuage />
          <h1 className="text-3xl">Le Nuage</h1>
        </Link>
        <h2 className="text-xl">your movie companion</h2>
      </div>
      <div className="flex space-x-8 mr-4 text-primary items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/feed" className="hover:underline">Feed</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
        <Link href="/login" className="p-3 bg-primary text-white rounded-xl hover:opacity-75">Log in / Sign in</Link>
      </div>
    </nav>
  );
}
