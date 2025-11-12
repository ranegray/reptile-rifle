import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/components/main-menu";
import ValueStreamToggle from "@/components/value-stream-toggle";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="p-4 sticky top-0 border-b bg-zinc-50 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <h1 className="text-xl font-bold">GOLEM</h1>
          <MainMenu />
        </div>
      </header>
      <main>
        {/* HERO */}
        <section
          id="get-started"
          className="flex flex-col my-16 p-4"
        >
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold">
                Humanoids Built for Real Manufacturing
              </h1>
              <h2 className="text-xl mt-4">
                Deploy humanoids that operate safely alongside people—automating
                dull, dirty, dangerous work with relentless precision and uptime.
              </h2>
            </div>
            <div className="relative z-0">
              <p className="absolute bottom-0">
                Task: Palletizing
              </p>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Humanoid robot in a manufacturing environment"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="bg-zinc-100 mt-4 border rounded-md p-4">
            <p className="text-lg"><span className="font-bold">Automation without the barriers.</span> Humanoids that drop into existing workcells—PLC-ready, redeployable, built for heavy-duty cycles.</p>
          </div>
        </section>

        {/* VALUE STREAM IMPACT */}
        <section id="value-stream" className="mb-16 p-4 flex flex-col justify-center">
          <h1 className="text-sm">VALUE STREAM IMPACT</h1>
          <h2 className="text-2xl font-bold">Cut Waiting and Transport. Boost Throughput.</h2>
          <ValueStreamToggle />
          <div className="bg-zinc-100 mt-4 border rounded-md p-4">
            <p className="text-lg"><span className="font-bold">Transform your value stream.</span> GOLEM humanoids reduce non-value-added time, enhancing overall throughput and efficiency on the manufacturing floor.</p>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="mb-16 p-4 flex flex-col justify-center">
          <h1 className="text-sm">PLATFORM</h1>
          <h2 className="text-2xl font-bold">Modular Intelligence for Industrial Work</h2>
          <div className="flex flex-col gap-6 mt-4 md:flex-row">
            <div className="bg-zinc-100 p-4 border rounded-md">
              <h3 className="text-lg font-bold">PERCEPTION</h3>
              <ul className="list-disc pl-5">
                <li>3D Vision</li>
                <li>Object Recognition</li>
                <li>Environment Mapping</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-4 border rounded-md">
              <h3 className="text-lg font-bold">MANIPULATION</h3>
              <ul className="list-disc pl-5">
                <li>7-DOF Arms</li>
                <li>Force/Torque Sensing</li>
                <li>Adaptive Gripping</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-4 border rounded-md">
              <h3 className="text-lg font-bold">MOBILITY</h3>
              <ul className="list-disc pl-5">
                <li>Bipedal Locomotion</li>
                <li>Dynamic Balancing</li>
                <li>Obstacle Navigation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section id="specs" className="mb-16 p-4 flex flex-col justify-center">
          <h1 className="text-sm">SPECIFICATIONS</h1>
          <h2 className="text-2xl font-bold">What Matters Most on the Floor</h2>
          <div className="mt-4 overflow-x-auto rounded-md border border-zinc-200 bg-zinc-50">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                <tr>
                  <th scope="col" className="px-4 py-3">Feature</th>
                  <th scope="col" className="px-4 py-3">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Payload</td>
                  <td className="px-4 py-4">SPEC_PAYLOAD_KG kg</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Runtime</td>
                  <td className="px-4 py-4">SPEC_RUNTIME_HR hr (hot-swap)</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Footprint / Aisles</td>
                  <td className="px-4 py-4">Works in SPEC_MIN_AISLE_MM mm aisles; turning radius SPEC_TURNING_RADIUS_MM mm</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Ingress Protection</td>
                  <td className="px-4 py-4">SPEC_IP_RATING</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Mobility</td>
                  <td className="px-4 py-4">Up to SPEC_WALK_SPEED_MPS m/s; rated SPEC_SLOPE_DEG° slope; SPEC_STEP_HEIGHT_MM mm step</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="px-4 py-4 font-semibold text-zinc-900">Precision</td>
                  <td className="px-4 py-4">Repeatability ±SPEC_REPEATABILITY_MM mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CASE STUDY */}
        <section id="case-study" className="mb-16 p-4 flex flex-col justify-center">
          <div className="flex flex-col bg-zinc-100 rounded-md border p-4">
            <h1 className="text-sm">PROVEN IN THE FIELD</h1>
            <h2 className="text-2xl font-bold">Disassembling EV Batteries</h2>
            <h3>Developed with support from the U.S. Department of Energy (ARPA-E).</h3>
            <ul className="list-disc pl-5">
              <li>30% faster cycle time than legacy teardown.</li>
              <li>99.5% uptime across eight nonstop weeks.</li>
              <li>1,000+ battery packs processed with zero incidents.</li>
            </ul>
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
                <Link href="/book-pilot">Book a pilot</Link>
            </div>
          </div>
        </section>

        {/* SAFETY & COMPLIANCE */}
        <section id="safety" className="mb-16 p-4 flex flex-col justify-center">
          <h1 className="text-sm">SAFETY & COMPLIANCE</h1>
          <h2 className="text-2xl font-bold">Engineered for Trust</h2>
          <div className="bg-zinc-100 border rounded-md p-4 mt-8">
            <ul className="list-disc pl-5">
              <li>Design to meet ISO 10218 / 13849</li>
              <li>Speed & Separation Monitoring (SSM), e-stops, area-scanners</li>
              <li>Transparent control stack; auditable envelopes around learned skills</li>
            </ul>
            <p className="mt-4">Read our <Link href="/specs" className="underline">full safety approach</Link>.</p>
          </div>
        </section>

        {/* GET IN TOUCH */}
        <section id="contact" className="mb-16 p-4 flex flex-col justify-center">
          <h1 className="text-sm">GET IN TOUCH</h1>
          <h2 className="text-2xl font-bold">Join Us in Shaping the Future of Work</h2>
        </section>
      </main>
      <footer>
        <div className="p-4 border-t">
          <p>&copy; 2025 GOLEM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
