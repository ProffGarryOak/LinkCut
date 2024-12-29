"use client";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <main className="bg-white text-black  h-screen flex flex-col justify-between">
      {/* Left Section: Description (80vw of the screen) */}
      <section className="flex flex-col items-center text-center  px-4 sm:px-6 md:px-8 z-10 flex-grow justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide whitespace-nowrap">
          About This Website
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mt-4">
          This website is designed to help you easily shorten URLs and manage them in a simple and intuitive way. The goal is to provide users with a fast, minimalistic platform to create sleek, custom short URLs. It offers an easy-to-use interface and ensures secure, hassle-free URL shortening for all your needs.
        </p>
      </section>

      {/* Footer Section: Contact Us */}
      <div className="w-full bg-black text-white flex flex-col items-center justify-center py-4 mt-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/adarsh-pandey"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/adarshpandey"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://adarshpandey.com"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            Portfolio
          </Link>
          <Link
            href="https://twitter.com/adarshpandey"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            Twitter
          </Link>
          <Link
            href="mailto:adarshpandey@example.com"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            Email
          </Link>
          <Link
            href="/resume"
            target="_blank"
            className="text-white text-center text-lg font-semibold hover:underline"
          >
            Resume
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
