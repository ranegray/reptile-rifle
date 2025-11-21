import LeadForm from "@/components/lead-form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="p-4 my-14 md:max-w-5xl md:mx-auto w-full">
        <p className="text-sm font-mono uppercase text-zinc-500 mb-4">Contact</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Get in touch.
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl">
          Whether you&apos;re ready to deploy or just have questions about our technology, we&apos;re here to help.
        </p>
      </section>

      <section className="bg-zinc-50 border-y border-zinc-200 py-16">
        <div className="mx-auto px-4 md:max-w-5xl w-full grid gap-12 md:grid-cols-2">
          
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-zinc-200 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <p className="text-zinc-600 mb-1">For general inquiries and sales.</p>
                    <a href="mailto:hello@golem.robotics" className="text-primary hover:underline">hello@golem.robotics</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-zinc-200 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Office</h3>
                    <p className="text-zinc-600 mb-1">Come visit our HQ.</p>
                    <address className="not-italic text-zinc-900">
                      123 Automation Blvd<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-zinc-200 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Phone</h3>
                    <p className="text-zinc-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15550000000" className="text-zinc-900 hover:text-primary transition-colors">+1 (555) 000-0000</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-zinc-200 rounded-xl">
              <h3 className="font-bold mb-2">Support for Existing Customers</h3>
              <p className="text-zinc-600 text-sm mb-4">
                If you are a current partner experiencing issues, please use the dedicated support portal for 24/7 assistance.
              </p>
              <a href="#" className="text-sm font-semibold text-primary hover:underline">Go to Support Portal →</a>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <h2 className="text-xl font-bold mb-2">Send us a message</h2>
              <p className="text-zinc-600 mb-6 text-sm">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <LeadForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
