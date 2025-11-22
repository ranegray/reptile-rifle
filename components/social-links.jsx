import Link from "next/link";
import { Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="https://www.linkedin.com/company/realtime-manufacturing/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-600 transition hover:text-primary"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="https://x.com/golemrobotics"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-600 transition hover:text-primary"
        aria-label="X (formerly Twitter)"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      {/* TODO add github link to https://github.com/correlllab/ */}
      <Link
        // TODO update email address
        href="mailto:hello@golemrobot.com"
        className="text-zinc-600 transition hover:text-primary"
        aria-label="Email Us"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  );
}
