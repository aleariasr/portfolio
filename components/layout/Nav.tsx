"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes, site } from "@/content/site";
import { useDictionary } from "@/lib/i18n/locale-store";
import { LinkButton } from "@/components/ui/LinkButton";

const navItems = [
  { key: "home", href: routes.home },
  { key: "projects", href: routes.projects },
  { key: "services", href: routes.services },
  { key: "about", href: routes.about },
  { key: "contact", href: routes.contact },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const dict = useDictionary();
  const activeIndex = navItems.findIndex((item) => isActive(pathname, item.href));
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  return (
    <>
      <header className="fixed left-0 right-0 top-4 z-50 hidden px-4 lg:block">
        <nav className="fade-in mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border bg-surface/85 px-5 py-3 shadow-sm backdrop-blur">
          <Link href={routes.home} className="text-sm font-semibold text-foreground">
            {site.name}
          </Link>

          <div className="flex items-center gap-3">
            <div className="relative flex rounded-full bg-muted p-1 text-sm text-muted-foreground">
              <span
                className="absolute left-1 top-1 h-9 w-24 rounded-full bg-accent transition-transform duration-300 ease-out"
                style={{ transform: `translateX(${safeActiveIndex * 6}rem)` }}
              />

              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative z-10 flex h-9 w-24 items-center justify-center rounded-full text-center transition-colors duration-300 ${
                    index === safeActiveIndex ? "text-accent-foreground" : "hover:text-foreground"
                  }`}
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
            </div>

            <LinkButton href={site.cvUrl} download size="sm">
              {dict.nav.resume}
            </LinkButton>
          </div>
        </nav>
      </header>

      <header className="fixed left-0 right-0 top-4 z-50 px-4 lg:hidden">
        <nav className="fade-in mx-auto flex max-w-md items-center justify-between rounded-full border border-border bg-surface/90 px-4 py-3 shadow-sm backdrop-blur">
          <Link href={routes.home} className="text-sm font-semibold text-foreground">
            {site.name}
          </Link>

          <LinkButton href={site.cvUrl} download size="sm">
            {dict.nav.resume}
          </LinkButton>
        </nav>
      </header>

      <nav className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-full border border-border bg-surface/90 p-1 shadow-lg backdrop-blur lg:hidden">
        <div className="relative grid grid-cols-5 text-xs font-medium text-muted-foreground">
          <span
            className="absolute bottom-1 top-1 rounded-full bg-accent transition-transform duration-300 ease-out"
            style={{ width: "20%", transform: `translateX(${safeActiveIndex * 100}%)` }}
          />

          {navItems.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative z-10 rounded-full px-1 py-3 text-center transition-colors duration-300 ${
                index === safeActiveIndex ? "text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
