"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/social-links";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="hidden items-center gap-8 md:flex">
        <NavLinks />
        <CTAButtons />
      </div>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 md:hidden"
        aria-expanded={open}
        aria-controls="main-menu-drawer"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open navigation</span>
      </button>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function NavLinks({ vertical = false, onNavigate }) {
  const layout = vertical
    ? "flex-col gap-5 text-base"
    : "flex-row gap-8 text-xs uppercase tracking-wider";

  return (
    <ul className={`flex ${layout} font-mono font-medium text-zinc-600`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="transition hover:text-primary"
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CTAButtons({ vertical = false, onNavigate }) {
  return (
    <div
      className={`flex gap-3 ${vertical ? "flex-col w-full" : "flex-row items-center"}`}
    >
      <Link
        href="/pilot"
        className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
      >
        Book a pilot
      </Link>
      <Link
        href="/contact"
        onClick={onNavigate}
        className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Get in touch
      </Link>
    </div>
  );
}

function MobileDrawer({ open, onClose }) {
  return (
    <div
      id="main-menu-drawer"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-[opacity,visibility] duration-300 md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`absolute right-0 top-0 flex h-dvh w-64 max-w-[85vw] flex-col gap-8 bg-white p-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-900">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close navigation</span>
          </button>
        </div>
        <NavLinks vertical onNavigate={onClose} />
        <CTAButtons vertical onNavigate={onClose} />
        <div className="mt-auto border-t border-zinc-100 pt-6">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
