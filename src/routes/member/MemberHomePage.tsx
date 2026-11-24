/**
 * Matches canvas "6A" — project/MyHomePage.dc.html (single $9.99
 * Introductory plan, uppercase section headers, highlighted panels).
 */
import type { ReactNode } from "react";

const BILLING_HISTORY = [
  { label: "Introductory · monthly", amount: "$9.99", status: "Paid" },
  { label: "Free 7-day trial · Math", amount: "$0.00", status: "Ended" },
];

function SectionPanel({
  title,
  accountNo,
  children,
}: {
  title: string;
  accountNo?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-imz-border bg-white px-7 py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-heading text-lg font-extrabold uppercase tracking-wide text-imz-text">
          {title}
        </div>
        {accountNo && (
          <span className="font-mono text-xs text-imz-text-faint">
            {accountNo}
          </span>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function MemberHomePage() {
  return (
    <div className="mx-auto flex max-w-[1328px] flex-col gap-6 px-14 py-8">
      {/* Learning profile - unwrapped, two colored cards (already stands out) */}
      <div>
        <div className="mb-3 font-heading text-lg font-extrabold uppercase tracking-wide text-imz-text">
          Learning Profile
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="min-w-[240px] flex-1 rounded-2xl bg-[#F3E7D0] p-5">
            Parent profile
          </div>
          <div className="min-w-[240px] flex-1 rounded-2xl bg-imz-sky-200 p-5">
            Student profile
          </div>
        </div>
      </div>

      <SectionPanel title="Account Details">
        <div className="rounded-[14px] bg-imz-cream p-5">
          Parent / Student account details go here.
        </div>
      </SectionPanel>

      <SectionPanel title="Plan and Billing Details" accountNo="Account no. 5010001">
        <div className="rounded-[14px] bg-imz-cream p-5">
          <div>Current plan: Introductory Plan</div>
          <div>Subject included: Math (Science · coming soon)</div>
          <div>Current status: Renews Dec 12, 2026</div>
          <div>Billing amount: $9.99 CAD / month</div>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="/member/plan/cancel"
              className="text-[13px] font-bold text-[#B4463D] underline"
            >
              Cancel plan
            </a>
            <span className="text-xs text-[#6B7280]">
              Access continues through the end of your current billing period
              — Dec 12, 2026.
            </span>
          </div>
        </div>
      </SectionPanel>

      <SectionPanel title="Billing History">
        <div className="flex flex-col gap-2">
          {BILLING_HISTORY.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-xl bg-imz-cream px-4 py-3 text-sm"
            >
              <span>{row.label}</span>
              <span>{row.amount}</span>
              <span className="text-imz-text-muted">{row.status}</span>
            </div>
          ))}
        </div>
      </SectionPanel>

      <SectionPanel title="Session History">
        <div className="text-sm text-imz-text-muted">
          Recent Math sessions with Jarvis will list here.
        </div>
      </SectionPanel>
    </div>
  );
}
