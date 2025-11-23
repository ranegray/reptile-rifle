import Link from "next/link";

export const metadata = {
  title: "Case Study: EV Battery Recycling | GOLEM",
  description: "Automating the hazardous teardown of EV battery packs with GOLEM humanoids.",
};

// TODO: Replace placeholder content with real case study details
export default function CaseStudy() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="mx-auto px-4 md:max-w-5xl w-full">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
            Case Study: EV Battery Recycling
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Automating the Hazardous Teardown of EV Battery Packs
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl">
            How GOLEM humanoids are removing humans from the &quot;dull, dirty, and dangerous&quot; loop of battery recycling while standardizing disassembly workflows.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto px-4 md:max-w-5xl w-full -mt-12 mb-16">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-800">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/case-study-poster.jpg"
          >
            <source src="/case-study-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="mx-auto px-4 md:max-w-5xl w-full mb-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">The Challenge</h2>
            <div className="h-1 w-12 bg-primary mb-6"></div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-zinc-600">
            <p>
              End-of-life electric vehicle batteries present a massive bottleneck in the recycling supply chain. Disassembly is currently a manual, labor-intensive process fraught with risks:
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">High Voltage Risk:</span>
                <span>Technicians work in close proximity to live modules with lethal voltage potential.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Toxic Exposure:</span>
                <span>Risk of thermal runaway and exposure to hazardous electrolytes and heavy metals.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">High Variability:</span>
                <span>Battery packs vary wildly between manufacturers, models, and years, making traditional hard automation impossible.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="mx-auto px-4 md:max-w-5xl w-full">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">The Solution</h2>
              <div className="h-1 w-12 bg-primary mb-6"></div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-lg text-zinc-600">
                GOLEM deployed a fleet of humanoid robots equipped with multi-modal perception and force-aware manipulation to handle the disassembly process.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm">
                  <h3 className="font-bold text-zinc-900 mb-2">Adaptive Perception</h3>
                  <p className="text-sm text-zinc-600">
                    Using 3D vision to identify screw locations, pry points, and cable connectors on previously unseen battery pack models.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm">
                  <h3 className="font-bold text-zinc-900 mb-2">Force-Aware Tools</h3>
                  <p className="text-sm text-zinc-600">
                    Humanoids use standard power tools but modulate force to prevent stripping screws or puncturing cells during prying operations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm">
                  <h3 className="font-bold text-zinc-900 mb-2">Human-in-the-Loop</h3>
                  <p className="text-sm text-zinc-600">
                    When the robot encounters an unknown anomaly, a remote operator can step in via VR teleoperation to guide the robot, which then learns from this intervention.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm">
                  <h3 className="font-bold text-zinc-900 mb-2">Digital Twin Logging</h3>
                  <p className="text-sm text-zinc-600">
                    Every step is logged, creating a digital passport for the recycled materials and providing data to improve future pack designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto px-4 md:max-w-5xl w-full py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Key Results</h2>
            <div className="h-1 w-12 bg-primary mb-6"></div>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-zinc-900 text-white rounded-xl">
                <div className="text-4xl font-mono font-bold text-primary mb-2">0</div>
                <div className="text-sm font-medium">Human Safety Incidents</div>
              </div>
              <div className="p-6 bg-zinc-900 text-white rounded-xl">
                <div className="text-4xl font-mono font-bold text-primary mb-2">24/7</div>
                <div className="text-sm font-medium">Continuous Operation</div>
              </div>
              <div className="p-6 bg-zinc-900 text-white rounded-xl">
                <div className="text-4xl font-mono font-bold text-primary mb-2">40%</div>
                <div className="text-sm font-medium">Throughput Increase</div>
              </div>
            </div>
            <p className="mt-8 text-zinc-600 italic border-l-4 border-zinc-200 pl-4">
              &quot;GOLEM robots didn&apos;t just replace a task; they transformed our safety profile. We no longer have to ask people to put their hands inside high-voltage packs.&quot;
              <br />
              <span className="text-sm font-bold text-zinc-900 not-italic mt-2 block">— Director of Operations, Pilot Partner</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto px-4 md:max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Have a hazardous task in mind?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let&apos;s discuss how GOLEM can improve safety and efficiency in your facility.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/pilot"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-zinc-100 transition-colors"
            >
              Book a Pilot
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
