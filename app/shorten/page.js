"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

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
        seturl(""),
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`),
          setshorturl(""),
          console.log(result),
          alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-green-100 my-16 p-8 rounded-lg flex flex-col">
      <h1 className="font-bold text-lg">Generate your short URLs</h1>
      <div className="flex flex-col  gap-4">
        <input
          className="px-4 py-2 mt-3 rounded-lg focus:outline-green-400"
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          className="px-4 py-2 focus:outline-green-400 rounded-lg"
          value={shorturl}
          type="text"
          placeholder="Enter your prefered short URL"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-green-500 w-full shadow-lg text-white p-3 rounded-lg py-2 my-3 font-bold ">
          Generate
        </button>
      </div>

      {generated && (
        <>
          <span className="font-bold text-lg">Your Link: </span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
