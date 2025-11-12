"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#contact", label: "Contact" },
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
      <div className="hidden w-full items-center justify-between gap-8 md:flex">
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
    : "flex-row gap-6 text-sm";

  return (
    <ul className={`flex ${layout} font-medium text-zinc-700`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="transition hover:text-zinc-900"
            onClick={onNavigate}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CTAButtons({ vertical = false, onNavigate }) {
  return (
    <div
      className={`flex gap-3 ${vertical ? "flex-col w-full" : "flex-row"}`}
    >
      <a
        href="#get-started"
        onClick={onNavigate}
        className="rounded border border-zinc-300 px-4 py-2 text-center text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
      >
        Get Started
      </a>
      <a
        href="#contact"
        onClick={onNavigate}
        className="rounded bg-zinc-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-zinc-800"
      >
        Talk to Sales
      </a>
    </div>
  );
}

function MobileDrawer({ open, onClose }) {
  return (
    <div
      id="main-menu-drawer"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 md:hidden ${
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
        className={`absolute right-0 top-0 flex h-full w-80 flex-col gap-8 bg-white p-6 shadow-2xl transition-transform duration-300 ${
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
      </div>
    </div>
  );
}
