import { config } from "@/lib/config";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-white px-4 py-8 pb-20 pt-50 text-gray-900 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-3xl font-bold">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using the website www.bestkeykaufen.de and our
            services, you accept and agree to be bound by the terms and
            provisions of this agreement. If you do not agree to abide by these
            terms, please do not use this site or our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. You should
            check this page periodically for changes. By continuing to use the
            website and services after we post any modifications, you accept the
            updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            3. Description of Services
          </h2>
          <p className="mb-4">
            {config.siteTitleShort} provides various SEO and digital marketing
            services. You understand and agree that these services are provided
            "as-is" and that we assume no responsibility for the timeliness,
            deletion, or failure to store any user communications or
            personalization settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            4. User Responsibilities
          </h2>
          <p className="mb-4">
            You are responsible for your use of our website and services, for
            any content you post, and for any consequences thereof. You agree to
            use the website and services in compliance with all applicable
            local, state, national, and international laws, rules, and
            regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            5. Account Registration
          </h2>
          <p className="mb-4">
            To access certain features of our services, you may be required to
            create an account. You agree to provide and maintain accurate,
            current, and complete information during the registration process.
            You are responsible for safeguarding your account and password, and
            you agree to notify us immediately of any unauthorized use of your
            account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            6. Intellectual Property
          </h2>
          <p className="mb-4">
            The content, organization, graphics, design, compilation, and other
            matters related to our website and services are protected under
            applicable intellectual property laws. You may not copy,
            redistribute, use, or publish any part of the website or services
            without our express permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to our website and services
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the terms.
            Upon termination, your right to use the services will cease
            immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            8. Limitation of Liability
          </h2>
          <p className="mb-4">
            In no event shall {config.siteTitleShort}, nor its directors,
            employees, partners, agents, suppliers, or affiliates, be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, including without limitation, loss of profits, data, use,
            goodwill, or other intangible losses, resulting from your use of the
            website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">9. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed and construed in accordance with the
            laws of United Kingdom, without regard to its conflict of law
            provisions. Any dispute arising from these terms or your use of the
            website or services shall be resolved in the courts of London.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please
            contact us at:
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

export default TermsOfService;
