"use client";

import { useLocale } from "@/lib/i18n/locale-store";
import type { Locale } from "@/lib/i18n/dictionary";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex flex-none items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium">
      {locales.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLocale(item.code)}
          aria-pressed={locale === item.code}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${
            locale === item.code
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
