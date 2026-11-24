import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

/**
 * Matches the public nav exactly as designed in the canvas
 * (project/Pricing.dc.html, utility strip + main nav) — do not
 * add/remove tabs or links here without updating the design canvas first.
 */
const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/jarvis", label: "MEET JARVIS" },
  { to: "/curriculum", label: "CURRICULUM" },
  { to: "/pricing", label: "PRICING" },
];

export function PublicNav() {
  return (
    <>
      {/* Top utility strip (public / logged-out) */}
      <div className="flex items-center justify-end gap-4 bg-imz-navy-900 px-14 py-[9px]">
        <span className="text-xs text-[#C7D3E8]">
          Existing Student?{" "}
          <a href="/login" className="font-semibold text-white underline">
            Log In
          </a>
        </span>
        <span className="text-xs text-[#C7D3E8]">New Student?</span>
        <a
          href="/signup"
          className="rounded-lg bg-imz-amber-600 px-3.5 py-1.5 text-xs font-bold text-imz-text"
        >
          Sign Up
        </a>
      </div>

      {/* Main nav */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-imz-border bg-imz-cream px-14 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="h-[30px] w-[30px] flex-shrink-0 rounded-lg bg-imz-border-strong" />
          <span className="font-heading text-[22px] font-extrabold text-imz-text">
            iMindz
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-[10px] px-[18px] py-2.5 text-xs font-bold tracking-wide",
                  isActive
                    ? "bg-imz-green-900 text-white"
                    : "border border-imz-border-strong bg-white text-imz-text",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
