import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Ryan Soprano</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Cybersecurity Engineer in Progress | Lab Builder | SOC Analyst in
          Training
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/ryansoprano"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ryansoprano"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="/RyanSoprano_Resume.pdf"
            className="text-blue-400 hover:underline"
          >
            Resume
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Home Lab Network</h3>
            <p className="text-gray-300 mt-2">
              A virtualized lab environment with pfSense, Kali Linux, Windows
              10, and Ubuntu server simulating real-world networking and
              attack-defense scenarios.
            </p>
            <a
              href="#"
              className="text-blue-400 mt-3 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Python Security Tools</h3>
            <p className="text-gray-300 mt-2">
              Custom Python scripts for log parsing, port scanning, and alert
              generation built as part of portfolio development and TryHackMe
              exercises.
            </p>
            <a
              href="#"
              className="text-blue-400 mt-3 inline-block hover:underline"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Certifications
        </h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>CompTIA Security+ (SY0-701)</li>
          <li>Microsoft SC-900</li>
          <li>In Progress: Network+, SOC Level 1 (TryHackMe)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Contact
        </h2>
        <p className="text-gray-300">
          Feel free to reach out via{" "}
          <a
            href="mailto:ryan@ryan-soprano.com"
            className="text-blue-400 hover:underline"
          >
            ryan@ryan-soprano.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
