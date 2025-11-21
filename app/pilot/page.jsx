import LeadForm from "@/components/lead-form";

const steps = [
  {
    phase: "PHASE 01",
    title: "Digital Twin Validation",
    body: "We ingest your facility CAD or NeRF scans. We prove the robot can navigate your aisles and reach your machines in a physics-accurate simulation.",
  },
  {
    phase: "PHASE 02",
    title: "On-Site Integration",
    body: 'Deployment engineers arrive. We map the "Keep-Out" zones, tie into your E-Stop safety loop, and run the first physical cycles.',
  },
  {
    phase: "PHASE 03",
    title: "Throughput Trial",
    body: "The robot runs autonomous shifts. We deliver a final report comparing GOLEM throughput vs. your manual baseline.",
  },
];

export default function Pilot() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="p-4 my-14 md:max-w-5xl md:mx-auto">
        <p className="text-sm font-mono uppercase text-zinc-500 mb-4">Pilot Program</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          From Handshake to Autonomy in 14 Days.
        </h1>
        <p className="text-xl text-zinc-600">
          Validate GOLEM in your facility with a fixed-scope, fixed-cost Pilot
          Program. We simulate first, deploy second, and prove ROI before you
          scale.
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-16 mb-16">
        <div className="mx-auto grid gap-8 px-4 md:max-w-5xl md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.phase}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-xs font-mono tracking-wide text-zinc-500">
                {step.phase}
              </div>
              <h3 className="text-xl font-bold my-3">{step.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* APPLICATION */}
      <section id="contact" className="p-4 w-full md:max-w-5xl md:mx-auto mb-8">
        <p className="text-sm font-mono uppercase text-zinc-500">GET STARTED</p>
        <h2 className="text-3xl font-bold mt-3 mb-4">
          Start your 14-day pilot today.
        </h2>
        <p className="text-zinc-500 mb-8">
          We run a fixed-scope, fixed-cost engagement and deliver a clear ROI
          report—before you scale.
        </p>
        <div>
          {/* TODO add props to track from where the lead is coming */}
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
