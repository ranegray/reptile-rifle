import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-primary">
        Error 404
      </p>
      <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">
        Waypoint Not Found
      </h1>
      <p className="mb-8 max-w-md text-lg text-zinc-600">
        The requested path does not exist in our navigation map. The robot may have wandered off-grid.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        Return to Base
      </Link>
    </div>
  );
}
