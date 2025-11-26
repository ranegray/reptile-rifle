"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-primary">
        Glitch in the Matrix
      </p>
      <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">
        Something Went Wrong
      </h1>
      <p className="mb-8 max-w-md text-lg text-zinc-600">
        Our robots seem to have dropped a packet. Don&apos;t worry, nothing is broken—we just need a quick reset.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition cursor-pointer hover:bg-zinc-800"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition cursor-pointer hover:bg-zinc-50"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
