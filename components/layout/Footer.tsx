"use client";

import { useDictionary } from "@/lib/i18n/locale-store";
import { site } from "@/content/site";

export function Footer() {
  const dict = useDictionary();

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
