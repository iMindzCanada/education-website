/** Matches canvas "5A" — project/ScienceComingSoon.dc.html */
export function ScienceComingSoonPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-imz-navy-900 px-14 text-center text-white">
      <div className="font-heading text-4xl font-extrabold">
        Science with Jarvis is on its way.
      </div>
      <div className="mt-3 text-lg text-imz-amber-400">
        We're starting with Math — Science is next.
      </div>
      <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 px-10 py-8">
        Coming soon
      </div>
      <a
        href="/math"
        className="mt-8 rounded-xl bg-imz-amber-600 px-6 py-3 text-sm font-bold text-imz-text"
      >
        Go to Math instead
      </a>
    </div>
  );
}
