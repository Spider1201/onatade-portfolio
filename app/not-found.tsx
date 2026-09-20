import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl border border-white/10 bg-[#0b1829]/70 p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">404 · Page not found</p>
        <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">Lost in the stack.</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#91a0b4]">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link href="/#home" className="mt-8 inline-flex bg-[#f4b860] px-5 py-3 text-sm font-bold text-[#08111f] transition hover:bg-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
