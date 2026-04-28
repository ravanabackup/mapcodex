import Link from "next/link";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await db.execute(sql`select 1`);

  return (
    <main className="grid min-h-screen place-items-center bg-black px-6 py-12 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-red-400">Trip Tracker</p>
        <h1 className="mt-3 text-[clamp(1.8rem,4.4vw,2.6rem)] font-bold leading-tight text-white">
          Single-File AMOLED Black Box Tracker
        </h1>
        <p className="mt-3 text-sm text-zinc-300">
          Open the complete standalone app at <span className="font-mono text-zinc-100">/tracker.html</span>.
          This file is also copied to <span className="font-mono text-zinc-100">/index.html</span> for GitHub Pages hosting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tracker.html"
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Launch Tracker
          </Link>
          <Link
            href="/index.html"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Open Static Index
          </Link>
        </div>
      </section>
    </main>
  );
}
