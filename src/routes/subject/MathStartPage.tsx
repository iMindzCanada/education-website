/**
 * Matches canvas "1A" — project/Main.dc.html (Math, start state).
 * In-session state (2A) and the Math Input / Calculator popups (3A)
 * are tracked separately — see task list.
 */
export function MathStartPage() {
  return (
    <div className="mx-auto max-w-[900px] px-14 py-14">
      <div className="mb-6">
        <div className="font-heading text-2xl font-extrabold text-imz-text">
          Hi Aarav!
        </div>
        <div className="text-imz-text-muted">
          What would you like to work on today?
        </div>
      </div>
      <div className="rounded-2xl border border-imz-border bg-white p-7">
        <div className="rounded-xl border border-imz-border px-4 py-4 text-imz-text-muted">
          Type, paste or say your question to start...
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-3.5 text-xs font-semibold text-imz-text-muted">
            <span>(x) Math input</span>
            <span>&middot; mic</span>
            <span>&middot; calculator</span>
          </div>
          <button
            type="button"
            className="h-11 rounded-xl bg-imz-navy-700 px-6 text-sm font-bold text-white"
          >
            Let's go &rarr;
          </button>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-imz-mint-200 px-5 py-3 text-sm font-semibold text-imz-mint-900">
        SAFE BY DESIGN — rooted in the Ontario curriculum
      </div>
    </div>
  );
}
