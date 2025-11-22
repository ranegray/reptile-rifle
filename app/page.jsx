import Link from "next/link";
import ValueStreamToggle from "@/components/value-stream-toggle";
import LeadForm from "@/components/lead-form";

// TODO verify these specs
const specs = {
  SPEC_PAYLOAD_KG: 10,
  SPEC_RUNTIME_HR: 8,
  SPEC_MIN_AISLE_MM: 900,
  SPEC_TURNING_RADIUS_MM: 600,
  SPEC_IP_RATING: "IP54",
  SPEC_WALK_SPEED_MPS: 1.0,
  SPEC_SLOPE_DEG: 5,
  SPEC_STEP_HEIGHT_MM: 50,
  SPEC_REPEATABILITY_MM: 2,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section
        id="hero"
        className="flex flex-col my-16 p-4 md:max-w-5xl md:mx-auto"
      >
        <div className="flex flex-col md:gap-12 items-center">
          <div className="mb-8 md:flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900">
              Humanoids that Learn Real Work
            </h1>
            <h2 className="text-xl mt-6 text-zinc-600">
              GOLEM deploys humanoid robots into existing manufacturing lines—starting with structured industrial tasks so they can safely learn the skills tomorrow&apos;s workforce will need.
            </h2>
            <div className="mt-8">
              <Link 
                href="/pilot" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book a pilot
              </Link>
            </div>
          </div>
          <div className="relative z-0 w-full md:w-auto">
            <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-md text-white text-xs font-mono px-3 py-1.5 rounded border border-white/10">
              Task: Grasping
            </div>
            <video
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/hero-poster.jpg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="bg-white mt-12 border border-zinc-200 p-6 rounded-xl shadow-sm">
          <p className="text-lg text-zinc-800">
            <span className="font-bold text-zinc-900">
              Start in factories, aim for the world.
            </span>{" "}
            We drop humanoids into real workcells—PLC-ready, safety-aware, and
            designed to improve through every shift they run.
          </p>
        </div>
      </section>

      {/* VALUE STREAM IMPACT */}
      <section
        id="value-stream"
        className="py-16 px-4 flex flex-col md:max-w-5xl md:mx-auto border-t border-zinc-100"
      >
        <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">IMPACT ON YOUR LINE</p>
        <h2 className="text-3xl font-bold mb-8 text-zinc-900">
          Turn Idle Time into Humanoid Work Time
        </h2>

        <ValueStreamToggle />
        <div className="bg-white mt-8 border border-zinc-200 p-6 rounded-xl shadow-sm">
          <p className="text-lg text-zinc-700">
            <span className="font-bold text-zinc-900">
              Put humanoids where your line stalls.
            </span>{" "}
            GOLEM humanoids take over repetitive handoffs, machine tending, and
            in-between steps—cutting waiting time and smoothing the flow of
            parts through your factory.
          </p>
        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        className="py-16 px-4 flex flex-col md:max-w-5xl md:mx-auto bg-zinc-50/50 rounded-3xl my-8"
      >
        <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">PLATFORM</p>
        <h2 className="text-3xl font-bold mb-8 text-zinc-900">
          The GOLEM Stack for Embodied Industrial AI
        </h2>
        <div className="grid gap-6 mt-4 md:grid-cols-3">
          <div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              PERCEPTION
            </h3>
            <ul className="space-y-3 text-zinc-600">
              <li>3D understanding of racks, pallets, and fixtures</li>
              <li>Robust object recognition in cluttered workcells</li>
              <li>Live mapping to keep humanoids in safe zones</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              MANIPULATION
            </h3>
            <ul className="space-y-3 text-zinc-600">
              <li>Whole-body control for machine tending and palletizing</li>
              <li>Force-aware skills for delicate teardown and assembly</li>
              <li>
                Grippers that handle real industrial variation, not just demos
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              MOBILITY
            </h3>
            <ul className="space-y-3 text-zinc-600">
              <li>Safe bipedal motion in real aisles and around people</li>
              <li>Dynamic balancing under payload and disturbance</li>
              <li>Navigation that respects keep-out zones and workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section
        id="specs"
        className="py-16 px-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">SPECIFICATIONS</p>
        <h2 className="text-3xl font-bold text-zinc-900">
          What Actually Matters on the Floor
        </h2>
        <p className="mt-4 text-zinc-600 max-w-2xl">
          Final specifications are evolving with our pilot partners. These are
          the performance envelopes we design around for real industrial work.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead className="bg-zinc-50 text-xs font-mono font-semibold uppercase tracking-wide text-zinc-500 border-b border-zinc-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Feature
                </th>
                <th scope="col" className="px-6 py-4">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white text-zinc-700">
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Payload
                </td>
                <td className="px-6 py-4 font-mono text-sm">{specs.SPEC_PAYLOAD_KG} kg</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Runtime
                </td>
                <td className="px-6 py-4 font-mono text-sm">{specs.SPEC_RUNTIME_HR} hr (hot-swap)</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Footprint / Aisles
                </td>
                <td className="px-6 py-4 font-mono text-sm">
                  Works in {specs.SPEC_MIN_AISLE_MM} mm aisles; turning radius {specs.SPEC_TURNING_RADIUS_MM} mm
                </td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Ingress Protection
                </td>
                <td className="px-6 py-4 font-mono text-sm">{specs.SPEC_IP_RATING}</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Mobility
                </td>
                <td className="px-6 py-4 font-mono text-sm">
                  Up to {specs.SPEC_WALK_SPEED_MPS} m/s; rated {specs.SPEC_SLOPE_DEG}° slope; {specs.SPEC_STEP_HEIGHT_MM} mm step
                </td>
              </tr>
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-zinc-900">
                  Precision
                </td>
                <td className="px-6 py-4 font-mono text-sm">
                  Repeatability ±{specs.SPEC_REPEATABILITY_MM} mm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-study"
        className="py-16 px-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <div className="flex flex-col md:flex-row bg-zinc-900 text-zinc-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">APPLICATION SCENARIO</p>
            <h2 className="text-3xl font-bold mb-4 text-white">Disassembling EV Batteries</h2>
            <h3 className="text-lg text-zinc-300 mb-6">
              A representative use case for humanoids working in hazardous,
              repetitive teardown.
            </h3>
            <ul className="space-y-3 mb-8 text-zinc-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Reduce human exposure to high-voltage and sharp components.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Standardize disassembly procedures across packs and models.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Capture rich data to continuously improve tools and workflows.
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <Link 
                href="/case-study"
                className="px-5 py-2.5 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
              >
                Read more
              </Link>
              <Link href="/pilot" className="text-white font-semibold hover:text-primary transition-colors">
                Book a pilot →
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative bg-zinc-800">
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
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section
        id="safety"
        className="py-16 px-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">SAFETY & COMPLIANCE</p>
        <h2 className="text-3xl font-bold text-zinc-900 mb-8">Engineered for Trust</h2>
        <div className="bg-white border border-zinc-200 p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-zinc-700">Designed to meet ISO 10218 / 13849 standards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-zinc-700">Speed & Separation Monitoring (SSM), e-stops, area-scanners</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-zinc-700">Transparent control stack; auditable envelopes around learned skills</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-zinc-50 p-6 rounded-lg border border-zinc-100">
            <p className="text-zinc-600 italic">
              &quot;Learned behaviors never run naked—we wrap every skill in hard safety
              envelopes and deterministic monitors.&quot;
            </p>
            <div className="mt-4">
              <Link href="/specs" className="text-primary font-semibold hover:underline text-sm">
                Read our full safety approach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section
        id="contact"
        className="py-16 px-4 flex flex-col justify-center md:max-w-5xl md:mx-auto mb-16"
      >
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Join Us in Shaping the Future of Work
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Curious what a humanoid could actually do in your facility in the next
            12-18 months? Tell us about your line, and
            we&apos;ll explore whether a GOLEM pilot makes sense for your
            operations.
          </p>
        </div>
        <div className="max-w-xl mx-auto w-full">
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
