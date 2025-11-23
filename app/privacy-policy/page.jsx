// TODO : Review and update the privacy policy content
export const metadata = {
  title: "Privacy Policy | GOLEM",
  description: "Privacy Policy for GOLEM.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-zinc">
        <p className="text-zinc-600 mb-4">Last updated: November 21, 2025</p>

        <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you fill out a lead form, request a pilot, or communicate with us. This may include your name, email address, company name, and specific industrial requirements.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Provide, maintain, and improve our services.</li>
          <li>Process and evaluate pilot program applications.</li>
          <li>Send you technical notices, updates, security alerts, and support messages.</li>
          <li>Respond to your comments, questions, and requests.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no system is completely secure.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
        <p className="mb-4">
          We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at legal@golemrobot.com.
        </p>
      </div>
    </div>
  );
}
