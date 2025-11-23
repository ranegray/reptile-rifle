import LeadForm from "@/components/lead-form";
import { CheckCircle2, FileBarChart, HardHat, Timer } from "lucide-react";

export const metadata = {
  title: "Pilot Program | GOLEM",
  description: "Validate GOLEM in your facility with a fixed-scope, fixed-cost Pilot Program. From handshake to autonomy in 14 days.",
};

const steps = [
  {
    phase: "01",
    title: "Digital Twin Validation",
    body: "We ingest your facility CAD or NeRF scans. We prove the robot can navigate your aisles and reach your machines in a physics-accurate simulation.",
  },
  {
    phase: "02",
    title: "On-Site Integration",
    body: 'Deployment engineers arrive. We map the "Keep-Out" zones, tie into your E-Stop safety loop, and run the first physical cycles.',
  },
  {
    phase: "03",
    title: "Throughput Trial",
    body: "The robot runs autonomous shifts. We deliver a final report comparing GOLEM throughput vs. your manual baseline.",
  },
];

const deliverables = [
  {
    icon: FileBarChart,
    title: "ROI Analysis",
    description: "A detailed breakdown of cost-per-pick and payback period based on actual pilot data."
  },
  {
    icon: HardHat,
    title: "Safety Certification",
    description: "Site-specific risk assessment and safety sign-off for your compliance team."
  },
  {
    icon: Timer,
    title: "Cycle Time Report",
    description: "Frame-by-frame analysis of the robot's performance vs. human operators."
  }
];

export default function Pilot() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="p-4 my-14 md:max-w-5xl md:mx-auto w-full">
        <p className="text-sm font-mono uppercase text-primary tracking-wider mb-4">Pilot Program</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          From Handshake to Autonomy in 14 Days.
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl">
          Validate GOLEM in your facility with a fixed-scope, fixed-cost Pilot
          Program. We simulate first, deploy second, and prove ROI before you
          scale.
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="mx-auto px-4 md:max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.phase}
                className="relative p-6 border border-zinc-800 rounded-xl bg-zinc-800/50"
              >
                <div className="absolute -top-4 left-6 bg-primary text-white text-sm font-mono font-bold px-3 py-1 rounded">
                  PHASE {step.phase}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 px-4 md:max-w-5xl md:mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What You Get</h2>
          <p className="text-zinc-600 max-w-2xl">
            The pilot isn&apos;t just a demo—it&apos;s a data-gathering operation. You walk away with a comprehensive package to build your business case.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center shadow-sm">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION */}
      <section id="contact" className="bg-zinc-50 border-t border-zinc-200 py-20">
        <div className="px-4 md:max-w-5xl md:mx-auto w-full grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-mono uppercase text-primary tracking-wider mb-2">GET STARTED</p>
            <h2 className="text-3xl font-bold mb-4">
              Start your 14-day pilot today.
            </h2>
            <p className="text-zinc-600 mb-8 text-lg">
              We run a fixed-scope, fixed-cost engagement and deliver a clear ROI
              report—before you scale.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Fixed cost, no hidden fees</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Full safety assessment included</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Keep the data even if you don&apos;t buy</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-lg">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
