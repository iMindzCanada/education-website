const CHECKLIST = [
  "Unlimited sessions with Jarvis, any time of day.",
  "Guided hints at every step — never just the answer.",
  "Flash cards for quick review before a test.",
  "No scheduling — jump in whenever your child is stuck.",
  "Add more children from the same parent account.",
];

const STEPS = [
  {
    title: "Create an Account",
    body: "A parent sets up the account and adds their student.",
  },
  {
    title: "Build a Learning Profile",
    body: "A few quick questions so Jarvis can tailor its help.",
  },
  {
    title: "Choose a plan",
    body: "Free trial or the Introductory plan — whichever fits.",
  },
  { title: "Start Learning", body: "Jump straight into Math with Jarvis." },
];

const FAQ_TOPICS = [
  "How iMindz works",
  "Curriculum & subjects",
  "Plans & billing",
  "Safety & privacy",
];

const FAQ_QUESTIONS = [
  "Is this a replacement for my child's teacher?",
  "Who is Jarvis?",
  "Does Jarvis just give students the answers?",
  "When will Science be available?",
];

export function PricingPage() {
  return (
    <>
      {/* Public marketing banner - green */}
      <div className="relative overflow-hidden bg-imz-green-900 px-14 pb-[60px] pt-12">
        <div className="relative mx-auto max-w-[1328px]">
          <div className="text-xs font-bold uppercase tracking-wide text-[#9FD9BC]">
            Plans &amp; Pricing
          </div>
          <div className="mt-2.5 font-heading text-5xl font-extrabold text-white">
            One price.
          </div>
          <div className="mt-0.5 text-xl font-bold text-imz-amber-400">
            Unlimited learning.
          </div>
        </div>
      </div>

      {/* SECTION 1: Plans - cream */}
      <div className="bg-imz-cream py-14 pb-16">
        <div className="mx-auto w-[calc(100%-112px)] max-w-[1328px] text-center">
          <div className="text-xs font-bold uppercase tracking-wide text-imz-green-600">
            Plans
          </div>
          <div className="mt-2 font-heading text-3xl font-extrabold text-imz-text">
            Pick the plan that fits your need.
          </div>
          <div className="mx-auto mt-2.5 max-w-[640px] text-sm text-imz-text-muted">
            Starting with Math for Grade 9 — guidance is always just a
            question away. Science is on its way.
          </div>
        </div>

        <div className="mx-auto mt-6 flex w-[calc(100%-112px)] max-w-[1100px] flex-col gap-5">
          {/* Featured plan card - white on cream */}
          <div className="flex flex-wrap items-start gap-9 rounded-[22px] border border-imz-border bg-white p-10">
            <div className="min-w-[240px] flex-1">
              <div className="text-base font-bold text-imz-text">
                Introductory Plan
              </div>
              <div className="mt-2.5 font-heading text-[44px] font-extrabold text-imz-text">
                $9.99<span className="text-xl font-bold">/month</span>
              </div>
              <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-imz-cream px-3 py-1.5 text-[11px] font-bold text-imz-text">
                Math &middot; Grade 9
              </div>
              <div className="ml-2 mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#EFE9D9] px-3 py-1.5 text-[11px] font-semibold text-imz-text-faint">
                Science &middot; Coming soon
              </div>
              <div className="mt-6 text-xs leading-relaxed text-[#4A5468]">
                *Sales tax not included in iMindz pricing.
                <br />
                Your payment helps cover the cost of Jarvis's AI tutoring and
                keeps development going.
              </div>
            </div>
            <div className="min-w-[280px] flex-1">
              <div className="flex flex-col gap-3.5">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="mt-[3px] flex-shrink-0"
                    >
                      <path
                        d="M2 8.5l3.5 3.5L14 3"
                        stroke="#15213B"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[15px] text-imz-text">{item}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 h-[52px] w-full rounded-xl bg-imz-navy-700 text-[15px] font-bold text-white"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Secondary option: Free Trial */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-imz-border bg-white px-7 py-6">
            <div>
              <div className="text-[15px] font-bold text-imz-text">
                Not sure yet? Start with a 7-day Free Trial.
              </div>
              <div className="mt-1 text-[13px] text-imz-text-muted">
                $0 &middot; No credit card needed &middot; Same unlimited
                access to Jarvis for Math.
              </div>
            </div>
            <button
              type="button"
              className="h-11 flex-shrink-0 rounded-[10px] border-2 border-imz-navy-700 bg-white px-6 text-sm font-bold text-imz-navy-700"
            >
              Start free trial
            </button>
          </div>

          <div className="text-center text-xs text-imz-text-faint">
            Secure checkout by Stripe &middot; Prices in CAD
          </div>
        </div>
      </div>

      {/* SECTION 2: How to get started - white */}
      <div className="bg-white py-[72px]">
        <div className="mx-auto w-[calc(100%-112px)] max-w-[1100px]">
          <div className="text-xs font-bold uppercase tracking-wide text-imz-green-600">
            How to get started
          </div>
          <div className="mt-2 font-heading text-[28px] font-extrabold text-imz-text">
            Up and running in four steps.
          </div>
          <div className="relative mt-10 flex flex-wrap items-start justify-between gap-6">
            <div className="absolute left-[60px] right-[60px] top-[19px] z-0 h-0.5 bg-imz-border" />
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative z-10 flex-1 basis-[200px] text-center"
              >
                <div
                  className={
                    i === 0
                      ? "mx-auto flex h-[38px] w-[38px] items-center justify-center rounded-full bg-imz-navy-700 font-bold text-white"
                      : "mx-auto flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-imz-border-strong bg-white font-bold text-imz-text"
                  }
                >
                  {i + 1}
                </div>
                <div className="mt-3 text-sm font-bold text-imz-text">
                  {step.title}
                </div>
                <div className="mt-1.5 text-xs text-imz-text-muted">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: FAQ - cream */}
      <div className="flex-1 bg-imz-cream py-[72px] pb-14">
        <div className="mx-auto w-[calc(100%-112px)] max-w-[1100px]">
          <div className="text-xs font-bold uppercase tracking-wide text-imz-green-600">
            FAQ
          </div>
          <div className="mt-2 font-heading text-[28px] font-extrabold text-imz-text">
            Questions? We've got you covered.
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            <div className="flex basis-[220px] flex-col gap-2">
              {FAQ_TOPICS.map((topic, i) => (
                <span
                  key={topic}
                  className={
                    i === 0
                      ? "rounded-[10px] bg-imz-navy-700 px-4 py-3 text-[13px] font-bold text-white"
                      : "rounded-[10px] border border-imz-border px-4 py-3 text-[13px] font-semibold text-imz-text"
                  }
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="flex min-w-0 flex-1 basis-[400px] flex-col gap-2.5">
              {FAQ_QUESTIONS.map((q) => (
                <div
                  key={q}
                  className="flex items-center justify-between rounded-[10px] border border-imz-border px-[18px] py-4 text-sm font-semibold text-imz-text"
                >
                  {q} <span>+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
