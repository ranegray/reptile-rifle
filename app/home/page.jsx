import Image from "next/image";
import Link from "next/link";
import ValueStreamToggle from "@/components/value-stream-toggle";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section
        id="hero"
        className="flex flex-col my-16 p-4 md:max-w-5xl md:mx-auto"
      >
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="mb-8 md:flex-1">
            <h1 className="text-4xl md:text-6xl font-bold">
              Humanoids that Learn Real Work
            </h1>
            <h2 className="text-xl mt-4 text-zinc-600">
              GOLEM deploys humanoid robots into existing manufacturing lines—
              starting with structured industrial tasks so they can safely learn
              the skills tomorrow&apos;s workforce will need.
            </h2>
            <button className="bg-zinc-200 p-2 rounded-md my-4 font-semibold hover:bg-zinc-300">
              <Link href="/pilot">Book a pilot</Link>
            </button>
          </div>
          <div className="relative z-0">
            <p className="absolute bottom-0">Task: Palletizing</p>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Humanoid robot in a manufacturing environment"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className="bg-zinc-100 mt-4 border rounded-md p-4">
          <p className="text-lg">
            <span className="font-bold">
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
        className="mb-16 p-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <h1 className="text-sm">IMPACT ON YOUR LINE</h1>
        <h2 className="text-2xl font-bold">
          Turn Idle Time into Humanoid Work Time
        </h2>

        <ValueStreamToggle />
        <div className="bg-zinc-100 mt-4 border rounded-md p-4">
          <p className="text-lg">
            <span className="font-bold">
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
        className="mb-16 p-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <h1 className="text-sm">PLATFORM</h1>
        <h2 className="text-2xl font-bold">
          The GOLEM Stack for Embodied Industrial AI{" "}
        </h2>
        <div className="flex flex-col gap-6 mt-4 md:flex-row">
          <div className="bg-zinc-100 p-4 border rounded-md">
            <h3 className="text-lg font-bold">PERCEPTION</h3>
            <ul className="list-disc pl-5">
              <li>3D understanding of racks, pallets, and fixtures</li>
              <li>Robust object recognition in cluttered workcells</li>
              <li>Live mapping to keep humanoids in safe zones</li>
            </ul>
          </div>
          <div className="bg-zinc-100 p-4 border rounded-md">
            <h3 className="text-lg font-bold">MANIPULATION</h3>
            <ul className="list-disc pl-5">
              <li>Whole-body control for machine tending and palletizing</li>
              <li>Force-aware skills for delicate teardown and assembly</li>
              <li>
                Grippers that handle real industrial variation, not just demos
              </li>
            </ul>
          </div>
          <div className="bg-zinc-100 p-4 border rounded-md">
            <h3 className="text-lg font-bold">MOBILITY</h3>
            <ul className="list-disc pl-5">
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
        className="mb-16 p-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <h1 className="text-sm">SPECIFICATIONS</h1>
        <h2 className="text-2xl font-bold">
          What Actually Matters on the Floor
        </h2>
        <p className="mt-2 text-zinc-600">
          Final specifications are evolving with our pilot partners. These are
          the performance envelopes we design around for real industrial work.
        </p>

        <div className="mt-4 overflow-x-auto rounded-md border border-zinc-200 bg-zinc-50">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Feature
                </th>
                <th scope="col" className="px-4 py-3">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 text-zinc-700">
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Payload
                </td>
                <td className="px-4 py-4">SPEC_PAYLOAD_KG kg</td>
              </tr>
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Runtime
                </td>
                <td className="px-4 py-4">SPEC_RUNTIME_HR hr (hot-swap)</td>
              </tr>
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Footprint / Aisles
                </td>
                <td className="px-4 py-4">
                  Works in SPEC_MIN_AISLE_MM mm aisles; turning radius
                  SPEC_TURNING_RADIUS_MM mm
                </td>
              </tr>
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Ingress Protection
                </td>
                <td className="px-4 py-4">SPEC_IP_RATING</td>
              </tr>
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Mobility
                </td>
                <td className="px-4 py-4">
                  Up to SPEC_WALK_SPEED_MPS m/s; rated SPEC_SLOPE_DEG° slope;
                  SPEC_STEP_HEIGHT_MM mm step
                </td>
              </tr>
              <tr className="hover:bg-white/60">
                <td className="px-4 py-4 font-semibold text-zinc-900">
                  Precision
                </td>
                <td className="px-4 py-4">
                  Repeatability ±SPEC_REPEATABILITY_MM mm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-study"
        className="mb-16 p-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <div className="flex flex-col bg-zinc-100 rounded-md border p-4">
          <div>
            <h1 className="text-sm">APPLICATION SCENARIO</h1>
            <h2 className="text-2xl font-bold">Disassembling EV Batteries</h2>
            <h3>
              A representative use case for humanoids working in hazardous,
              repetitive teardown.
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Reduce human exposure to high-voltage and sharp components.
              </li>
              <li>
                Standardize disassembly procedures across packs and models.
              </li>
              <li>
                Capture rich data to continuously improve tools and workflows.
              </li>
            </ul>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Humanoid robot disassembling an EV battery pack"
            width={600}
            height={400}
            className="mt-4"
          />
          <div className="flex gap-4 mt-4 items-center">
            <button className="px-4 py-2 bg-zinc-300 rounded-md">
              <Link href="/case-study">Read more</Link>
            </button>
            <Link href="/pilot">Book a pilot</Link>
          </div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section
        id="safety"
        className="mb-16 p-4 flex flex-col md:max-w-5xl md:mx-auto"
      >
        <h1 className="text-sm">SAFETY & COMPLIANCE</h1>
        <h2 className="text-2xl font-bold">Engineered for Trust</h2>
        <div className="bg-zinc-100 border rounded-md p-4 mt-4">
          <ul className="list-disc pl-5">
            <li>Designed to meet ISO 10218 / 13849</li>
            <li>Speed & Separation Monitoring (SSM), e-stops, area-scanners</li>
            <li>
              Transparent control stack; auditable envelopes around learned
              skills
            </li>
          </ul>
          <p className="mt-4">
            Learned behaviors never run naked—we wrap every skill in hard safety
            envelopes and deterministic monitors. Read our{" "}
            <Link href="/specs" className="underline">
              full safety approach
            </Link>
            .
          </p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section
        id="contact"
        className="mb-8 p-4 flex flex-col justify-center md:max-w-5xl md:mx-auto"
      >
        <h1 className="text-sm">GET IN TOUCH</h1>
        <h2 className="text-2xl font-bold">
          Join Us in Shaping the Future of Work
        </h2>
        <p className="my-4">
          Curious what a humanoid could actually do in your facility in the next
          12-18 months—not ten years from now? Tell us about your line, and
          we&apos;ll explore whether a GOLEM pilot makes sense for your
          operations.
        </p>
        <LeadForm />
      </section>
    </div>
  );
}
