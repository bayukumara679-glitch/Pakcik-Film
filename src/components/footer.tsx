import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="mt-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-[var(--fg-muted)] md:flex-row md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
         <a href="mailto:kumarrp7800@gmail.com?subject=Request Film" className="hover:text-[var(--fg)]">Request</a>
         <a href="mailto:kumarrp7800@gmail.com?subject=Laporan DMCA" className="hover:text-[var(--fg)]">DMCA</a>
          <a href="https://github.com/bayukumara679-glitch/Pakcik-Film.git/" target="_blank" rel="noreferrer" className="hover:text-[var(--fg)]">GitHub</a>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <div>Curated with 👉 by Pakcik FILM</div>
          <div className="text-xs opacity-70">© {new Date().getFullYear()} Pakcik.</div>
        </div>
      </div>
    </footer>
  );
}
