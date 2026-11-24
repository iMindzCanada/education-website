export function PublicFooter() {
  return (
    <div className="bg-imz-navy-700 px-14 pb-[18px] pt-[34px]">
      <div className="mx-auto flex max-w-[1328px] flex-wrap justify-between gap-6">
        <div className="flex max-w-[620px] gap-3.5">
          <span className="h-11 w-11 flex-shrink-0 rounded-xl bg-white" />
          <div className="text-[13px] leading-relaxed text-[#C7D3E8]">
            iMindz is an EdTech startup helping Ontario high school students
            with Math homework through guided questions, progressive hints
            and step-by-step explanations.
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wide text-[#8FA3C9]">
            Get in touch
          </span>
          <a
            href="/contact"
            className="rounded-[10px] border border-[#2E4A72] px-4 py-2.5 text-[13px] font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="mx-auto mt-[22px] flex max-w-[1328px] flex-wrap justify-between gap-2.5 border-t border-[#1E3A5E] pt-4">
        <span className="text-xs text-[#8FA3C9]">
          &copy; {new Date().getFullYear()} iMindz &middot; Terms &middot;
          Privacy
        </span>
        <span className="text-xs text-[#8FA3C9]">
          Jarvis complements, not replaces, teachers and classroom learning.
        </span>
      </div>
    </div>
  );
}
