"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        console.log(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="bg-white text-black min-h-[75vh] flex items-center justify-center">
      <section className="flex flex-col items-center gap-8 text-center max-w-lg w-full px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide whitespace-nowrap">
          Simplify Your URLs Instantly
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Create sleek, minimal, and secure links without the hassle. Pure simplicity, redefined.
        </p>
        <div className="w-full">
          <input
            type="text"
            value={url}
            className="w-full border-b border-black text-lg sm:text-xl py-2 mb-4 focus:outline-none placeholder-gray-500"
            placeholder="Paste your URL here"
            onChange={(e) => seturl(e.target.value)}
          />
          <input
            type="text"
            value={shorturl}
            className="w-full border-b border-black text-lg sm:text-xl py-2 mb-6 focus:outline-none placeholder-gray-500"
            placeholder="Your custom short URL"
            onChange={(e) => setshorturl(e.target.value)}
          />
          <button
            onClick={generate}
            className="text-white bg-black py-3 px-8 text-lg sm:text-xl font-bold uppercase tracking-wide hover:bg-gray-900 transition-all"
          >
            Generate
          </button>
        </div>
        {generated && (
          <div className="mt-6">
            <p className="text-lg sm:text-xl font-medium">Your Shortened URL:</p>
            <Link
              href={generated}
              target="_blank"
              className="text-black underline text-lg sm:text-xl mt-2 inline-block"
            >
              {generated}
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Shorten;
