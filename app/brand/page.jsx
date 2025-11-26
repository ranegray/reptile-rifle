import Image from "next/image";
import { ShieldCheck, Eye, Zap } from "lucide-react";

export const metadata = {
  title: "Brand Style Guide | GOLEM",
  description: "Official identity and design system for GOLEM Robotics.",
};

export default function BrandGuide() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-primary/30 print:bg-white">
      {/* PRINT HEADER (Only visible when printing) */}
      <div className="hidden print:flex justify-between items-center border-b-2 border-zinc-900 pb-4 mb-8 pt-8">
        <h1 className="font-mono text-2xl font-bold tracking-tighter">GOLEM</h1>
        <span className="font-mono text-sm text-zinc-500">BRAND_SYS_V1.0</span>
      </div>

      {/* SCREEN HEADER */}
      <header className="bg-zinc-900 text-white py-20 print:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-primary mb-6 bg-white/5">
            INTERNAL USE ONLY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading mb-6">
            Brand<br />Identity<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            The blueprint for communicating the GOLEM reality: industrial, deterministic, and foundational.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24 print:py-4 print:space-y-12">
        
        {/* SECTION 1: CORE IDENTITY */}
        <section className="grid md:grid-cols-12 gap-12 print:block print:mb-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">01 // Core Identity</h2>
            <hr className="border-primary w-12 border-2 mb-6" />
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-heading">The Mission</h3>
              <p className="text-lg leading-relaxed text-zinc-600">
                We deploy rugged, reliable humanoid labor into existing manufacturing lines. We focus on the factory floor, not a sci-fi dream. 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                <span className="block text-xs font-mono text-zinc-500 mb-2">TAGLINE</span>
                <p className="text-xl font-bold font-heading">Humanoids that Learn Real Work.</p>
              </div>
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                <span className="block text-xs font-mono text-zinc-500 mb-2">VOICE</span>
                <p className="text-xl font-bold font-heading">Industrial. Precise. Direct.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LOGO & ICONOGRAPHY */}
        <section className="grid md:grid-cols-12 gap-12 print:break-before-page">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">02 // Visual Assets</h2>
            <hr className="border-primary w-12 border-2 mb-6" />
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className="p-12 border border-zinc-200 rounded-xl flex items-center justify-center gap-8 bg-zinc-50">
              {/* Logo Display */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-md flex items-center justify-center mb-4 bg-white">
                   <Image 
                     src="/golem-bw-logo.png" 
                     alt="GOLEM Logo" 
                     width={500} 
                     height={500}
                     className="object-contain"
                   />
                </div>
                <p className="font-mono font-bold text-lg tracking-widest">GOLEM</p>
              </div>
              <div className="w-px h-32 bg-zinc-200"></div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-zinc-900 rounded-md flex items-center justify-center mb-4 text-white">
                   <Image 
                     src="/golem-bw-logo-inverse.png" 
                     alt="GOLEM Logo Inverse" 
                     width={500} 
                     height={500}
                     className="object-contain"
                   />
                </div>
                <p className="font-mono font-bold text-lg tracking-widest text-zinc-900">INVERSE</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border border-zinc-200 rounded flex flex-col items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="text-xs font-mono text-zinc-500">SAFETY</span>
                </div>
                <div className="p-4 border border-zinc-200 rounded flex flex-col items-center gap-2">
                    <Eye className="w-6 h-6 text-zinc-900" />
                    <span className="text-xs font-mono text-zinc-500">PERCEPTION</span>
                </div>
                <div className="p-4 border border-zinc-200 rounded flex flex-col items-center gap-2">
                    <Zap className="w-6 h-6 text-zinc-900" />
                    <span className="text-xs font-mono text-zinc-500">POWER</span>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COLOR PALETTE */}
        <section className="grid md:grid-cols-12 gap-12 print:break-before-page">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">03 // Color System</h2>
            <hr className="border-primary w-12 border-2 mb-6" />
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div className="space-y-2">
                <div className="h-24 w-full bg-primary rounded-lg shadow-sm"></div>
                <div className="flex justify-between">
                  <span className="font-bold">Primary</span>
                  <span className="text-zinc-500">Orange</span>
                </div>
                <div className="text-zinc-400">#D96D32</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-zinc-900 rounded-lg shadow-sm"></div>
                <div className="flex justify-between">
                  <span className="font-bold">Charcoal</span>
                  <span className="text-zinc-500">900</span>
                </div>
                <div className="text-zinc-400">#18181B</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-zinc-50 border border-zinc-200 rounded-lg shadow-sm"></div>
                <div className="flex justify-between">
                  <span className="font-bold">Canvas</span>
                  <span className="text-zinc-500">50</span>
                </div>
                <div className="text-zinc-400">#FAFAFA</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-zinc-200 rounded-lg shadow-sm"></div>
                <div className="flex justify-between">
                  <span className="font-bold">Border</span>
                  <span className="text-zinc-500">200</span>
                </div>
                <div className="text-zinc-400">#E4E4E7</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TYPOGRAPHY */}
        <section className="grid md:grid-cols-12 gap-12 print:break-before-page">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">04 // Typography</h2>
            <hr className="border-primary w-12 border-2 mb-6" />
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-2 border-b border-zinc-100 pb-6">
              <span className="text-xs font-mono text-zinc-400 uppercase">Heading (Space Mono)</span>
              <h2 className="text-4xl font-bold font-heading text-zinc-900">
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. 0123456789
              </h2>
            </div>
            <div className="space-y-2 border-b border-zinc-100 pb-6">
              <span className="text-xs font-mono text-zinc-400 uppercase">Body (Geist Sans)</span>
              <p className="text-lg text-zinc-600">
                The quick brown fox jumps over the lazy dog. We prioritize legibility and neutrality in long-form content. 
                Data should be clear, concise, and free of ornamentation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DOS AND DONTS */}
        <section className="grid md:grid-cols-12 gap-12 print:break-before-page">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">05 // Guidelines</h2>
            <hr className="border-primary w-12 border-2 mb-6" />
          </div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-green-700 font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">✓</span> DO
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 list-disc list-inside">
                <li>Use precise, industrial language.</li>
                <li>Show robots in real factory settings (messy is okay).</li>
                <li>Focus on safety metrics and reliability.</li>
                <li>Use the primary Orange for alerts and CTAs.</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-red-700 font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">×</span> DON&apos;T
              </h3>
              <ul className="space-y-2 text-sm text-zinc-700 list-disc list-inside">
                <li>Use &quot;Sci-Fi&quot; or &quot;Magic&quot; metaphors.</li>
                <li>Anthropomorphize the robot excessively.</li>
                <li>Use neon, cyberpunk, or gradients.</li>
                <li>Obscure the robot&apos;s mechanics.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
