import { config } from "@/lib/config";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-white px-4 py-8 pb-20 pt-50 text-gray-900 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12  text-3xl font-bold">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p className="mb-4">
            Welcome to {config.siteTitleShort}. We value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website [yourwebsite.com] and use our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect and process the following types of information:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              <strong>Personal Identification Information:</strong> Name, email
              address, phone number, company name, and job title.
            </li>
            <li className="mb-2">
              <strong>Technical Data:</strong> IP address, browser type,
              operating system, referring website, and pages visited.
            </li>
            <li className="mb-2">
              <strong>Usage Data:</strong> Information about how you use our
              website and services.
            </li>
            <li className="mb-2">
              <strong>Cookies and Tracking Technologies:</strong> Information
              collected through cookies, web beacons, and other tracking
              technologies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect in the following ways:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              <strong>To Provide and Improve Our Services:</strong> Deliver the
              services you request and enhance your experience on our website.
            </li>
            <li className="mb-2">
              <strong>To Communicate with You:</strong> Send you updates,
              newsletters, marketing materials, and other information that may
              interest you.
            </li>
            <li className="mb-2">
              <strong>To Analyze and Understand Usage:</strong> Monitor and
              analyze trends, usage, and activities to improve our website and
              services.
            </li>
            <li className="mb-2">
              <strong>To Comply with Legal Obligations:</strong> Fulfill legal
              requirements and respond to lawful requests from public
              authorities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            4. Sharing Your Information
          </h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              <strong>Service Providers:</strong> Third-party vendors who help
              us provide our services, such as hosting providers, email delivery
              services, and analytics tools.
            </li>
            <li className="mb-2">
              <strong>Business Partners:</strong> Partners with whom we
              collaborate to offer joint services or promotions.
            </li>
            <li className="mb-2">
              <strong>Legal Requirements:</strong> Authorities or other parties
              when required by law or to protect our rights, property, or
              safety.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">We use cookies and similar technologies to:</p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              <strong>Enhance User Experience:</strong> Store your preferences
              and personalize your experience.
            </li>
            <li className="mb-2">
              <strong>Analyze Website Performance:</strong> Track and analyze
              usage and trends to improve our services.
            </li>
            <li className="mb-2">
              <strong>Marketing and Advertising:</strong> Deliver relevant
              advertisements and measure their effectiveness.
            </li>
          </ul>
          <p className="mb-4">
            You can control cookies through your browser settings and other
            tools. However, disabling cookies may affect your experience on our
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access, use, or
            disclosure. However, no internet-based service can be completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            7. Your Data Protection Rights
          </h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              <strong>Access:</strong> Request access to your personal
              information.
            </li>
            <li className="mb-2">
              <strong>Correction:</strong> Request corrections to any inaccurate
              or incomplete information.
            </li>
            <li className="mb-2">
              <strong>Deletion:</strong> Request deletion of your personal
              information under certain conditions.
            </li>
            <li className="mb-2">
              <strong>Restriction:</strong> Request restriction of processing
              your personal information.
            </li>
            <li className="mb-2">
              <strong>Objection:</strong> Object to the processing of your
              personal information.
            </li>
            <li className="mb-2">
              <strong>Portability:</strong> Request transfer of your personal
              information to another organization or to you.
            </li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at [contact email].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <address className="mb-4 not-italic">
            {config.siteTitleShort}
            <br />
            {config.siteEmail}
            <br />
            {config.phone}
            <div>
              <br />
              {config.addresss.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
