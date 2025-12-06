"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[75dvh] w-full flex-col flex items-center bg-white box-border py-12 px-36 gap-4">
      <p className="text-blue-900 font-bold text-2xl italic">
        &quot;He&apos;s the &apos;cure&quot;
      </p>
      <Image src="/logo.png" alt="logo" width={200} height={200}></Image>
      <div className="gap-12 flex text-3xl items-center text-blue-900 font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/store">Store</Link>
        <Link href="/donate">
          <div className="bg-blue-800 text-white px-4 py-2 box-border rounded-2xl">
            <h1>Donate</h1>
          </div>
        </Link>
      </div>
      <p className="text-black italic">For inquiries, please contact: <span className="text-accent hover:underline cursor-pointer">jackmercure@jackforpres.com</span></p>
      <div className="w-full border-t-2 border-t-background box-border py-4 text-accent flex justify-between items-center">
        <p>2025 © Jack Mercure for President | No Rights Reserved</p>
        <div className="border-2 border-accent box-border p-4">
            <p>Paid for By No One</p>
        </div>
      </div>
      <Link href='#header' className="text-gray-400 flex gap-0.5 font-semibold hover:text-gray-300">To the Top <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></Link>
    </div>
  );
}
