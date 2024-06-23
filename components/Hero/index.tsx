"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse text-center md:flex-row md:items-center  md:text-left lg:gap-8 ">
            <div className=" md:w-1/2">
              <p>
                {" "}
                ⚡ Best SEO Solution — Built for the latest tools and
                technologies
              </p>
              <h1 className="mb-5 pr-0 text-3xl font-bold text-black dark:text-white md:pr-16 xl:text-hero ">
                Reach Your Business
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Goals
                </span>{" "}
                in Record Time
              </h1>
              <p>
                Our tailored SEO strategies are designed to increase your
                website traffic, enhance visibility, and drive growth.
              </p>

              <div className="mx-auto mt-10 max-w-max md:mx-0">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-titlebg2 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="animate_right relative mb-10 aspect-[4/3] max-w-[650px] md:block md:w-1/2">
              <Image
                className=" dark:hidden"
                src="/images/hero.png"
                alt="Hero"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
