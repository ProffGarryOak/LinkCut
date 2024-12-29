import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black h-[75vh] flex items-center justify-center">
      <section className="flex flex-col gap-4 items-center text-center">
        <p className="text-3xl font-bold">
          Experience the ease of URL Shortening
        </p>
        <p className="px-12 max-w-lg">
          Say goodbye to unnecessary tracking and complicated logins. We bring
          you a clean, secure, and straightforward URL shortener. No strings
          attached—just efficiency and privacy.
        </p>
        <div className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-black text-white rounded-lg shadow-lg px-6 py-2 font-bold transition-all hover:bg-gray-800">
              Try Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
