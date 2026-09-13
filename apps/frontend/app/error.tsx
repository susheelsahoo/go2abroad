"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="p-12 text-center">
      <h1 className="text-2xl font-semibold">
        Content temporarily unavailable
      </h1>
      <p className="my-4">Please try again shortly.</p>
      <button
        onClick={reset}
        className="rounded bg-emerald-800 px-5 py-2 text-white"
      >
        Try again
      </button>
    </main>
  );
}
