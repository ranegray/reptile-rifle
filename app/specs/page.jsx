import Link from "next/link";
import { ShieldCheck, Eye, Lock, FileCheck } from "lucide-react";

export const metadata = {
  title: "Safety & Specifications | GOLEM",
  description: "Safety is not a feature, it's the foundation. Explore GOLEM's safety architecture and technical specifications.",
};

export default function SafetySpecs() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="p-4 my-14 md:max-w-5xl md:mx-auto w-full">
        <p className="text-sm font-mono uppercase text-zinc-500 mb-4">Safety & Compliance</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Safety is not a feature.<br />It&apos;s the foundation.
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl">
          We don&apos;t just build robots that work; we build robots that work safely alongside people. 
          Our multi-layered safety architecture ensures GOLEM humanoids are ready for real-world collaboration.
        </p>
      </section>

      {/* CORE PILLARS */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-16">
        <div className="mx-auto px-4 md:max-w-5xl w-full">
          <h2 className="text-2xl font-bold mb-12">The Four Pillars of GOLEM Safety</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Standards Compliance</h3>
              <p className="text-zinc-600 mb-4">
                Designed from the ground up to meet ISO 10218-1 and ISO 13849-1 (PL d, Cat 3) requirements for collaborative industrial robots.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Third-party audited safety controller</li>
                <li>• Redundant encoder feedback</li>
                <li>• Safe Torque Off (STO) on all joints</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Perception & Awareness</h3>
              <p className="text-zinc-600 mb-4">
                360° LiDAR and depth camera coverage creates a real-time safety bubble. The robot continuously monitors its surroundings for human presence.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Speed & Separation Monitoring (SSM)</li>
                <li>• Dynamic collision avoidance</li>
                <li>• Occlusion handling in cluttered aisles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deterministic Control</h3>
              <p className="text-zinc-600 mb-4">
                AI learns the skill, but classical control enforces the limits. We wrap every learned behavior in a hard, deterministic safety envelope.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Cartesian velocity limits</li>
                <li>• Force/Torque limiting</li>
                <li>• Virtual walls and keep-out zones</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment Process</h3>
              <p className="text-zinc-600 mb-4">
                Safety starts before the robot arrives. We conduct a thorough risk assessment of your facility and workflow before deployment.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Site-specific Risk Assessment (RA)</li>
                <li>• Operator training & certification</li>
                <li>• E-stop integration with facility loop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="p-4 my-16 md:max-w-5xl md:mx-auto w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to discuss your safety requirements?</h2>
        <p className="text-zinc-600 mb-8">
          Our safety engineers are available to walk you through our technical file and certifications.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contact Safety Team
        </Link>
      </section>
    </div>
  );
}
