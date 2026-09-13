export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg p-12 text-center">
      <h1 className="text-3xl font-semibold">Page not available</h1>
      <p className="mt-4 text-slate-600">
        This page has not been published or no longer exists.
      </p>
      <a href="/" className="mt-6 inline-block underline">
        Return home
      </a>
    </main>
  );
}
