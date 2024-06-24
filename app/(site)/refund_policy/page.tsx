import { config } from "@/lib/config";
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-white px-4 py-8 pb-20 pt-50 text-gray-900 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-3xl font-bold">Refund Policy</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Overview</h2>
          <p className="mb-4">
            At {config.siteTitleShort}, we strive to provide the best services
            possible. If you are not satisfied with our services, we offer a
            refund policy as outlined below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Eligibility for Refunds
          </h2>
          <p className="mb-4">
            Refunds are only available for services purchased directly from{" "}
            {config.siteTitleShort}. To be eligible for a refund, you must
            request it within 30 days of your purchase. Proof of purchase is
            required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            3. Non-Refundable Items
          </h2>
          <p className="mb-4">Certain items are non-refundable, including:</p>
          <ul className="mb-4 list-inside list-disc">
            <li className="mb-2">
              Services that have already been delivered and accepted
            </li>
            <li className="mb-2">Customized plans or packages</li>
            <li className="mb-2">Consultation fees</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            4. Requesting a Refund
          </h2>
          <p className="mb-4">
            To request a refund, please contact our support team at{" "}
            <a
              href={`mailto:${config.siteEmail}`}
              className="text-blue-600 underline"
            >
              {config.siteEmail}
            </a>{" "}
            with your purchase details. We will review your request and notify
            you of the approval or rejection of your refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Processing Refunds</h2>
          <p className="mb-4">
            If your refund is approved, it will be processed, and a credit will
            automatically be applied to your original method of payment within a
            certain amount of days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            6. Late or Missing Refunds
          </h2>
          <p className="mb-4">
            If you haven’t received a refund yet, first check your bank account
            again. Then contact your credit card company; it may take some time
            before your refund is officially posted. If you’ve done all of this
            and you still have not received your refund yet, please contact us
            at{" "}
            <a
              href={`mailto:${config.siteEmail}`}
              className="text-blue-600 underline"
            >
              {config.siteEmail}
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            7. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about our Refund Policy, please contact us
            at:
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

export default RefundPolicy;
