"use client";

import { useDictionary } from "@/lib/i18n/locale-store";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const dict = useDictionary();

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
