import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* HERO / MISSION */}
      <section className="p-4 my-14 md:max-w-5xl md:mx-auto w-full">
        <p className="text-sm font-mono uppercase text-zinc-500 mb-4">About Us</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Developing the first humanoids made for the factory floor.
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl">
          Humanoids engineered for industrial deployment with intelligent and
          predictable behavior. We aren&apos;t building general purpose bots for
          doing laundry—we are building rugged, reliable labor for the supply
          chain.
        </p>
      </section>

      {/* TEAM */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-16">
        <div className="mx-auto px-4 md:max-w-5xl w-full">
          <h2 className="text-2xl font-bold mb-12">Meet the Team</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* CEO */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-128 overflow-hidden rounded-lg bg-zinc-200">
                <Image
                  src="/nikolaus-correll-profile.png"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Nikolaus Correll</h3>
                <p className="text-sm font-mono text-primary uppercase mb-2">CEO & Co-Founder</p>
                {/* TODO approve bio w correll */}
                <p className="text-zinc-600">
                  Robotics expert with 15+ years designing complex mechatronic systems for real-world deployment. Focused on closing the loop between sensing, computation, and actuation to enable next-gen autonomy.
                </p>
              </div>
            </div>

            {/* CTO */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-128 overflow-hidden rounded-lg bg-zinc-200">
                <Image
                  src="/max-conway-profile.png"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Max Conway</h3>
                <p className="text-sm font-mono text-primary uppercase mb-2">CTO & Co-Founder</p>
                {/* TODO approve bio w max */}
                <p className="text-zinc-600">
                  Spearheading technical strategy and autonomy. PhD researcher at CU Boulder specializing in open-world robotics, with a focus on robust perception and manipulation in unstructured environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
