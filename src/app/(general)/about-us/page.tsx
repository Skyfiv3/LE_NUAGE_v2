import React from "react";

export default function AboutPage() {
  return (
    <div className="mt-22 min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Le Nuage</h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Le Nuage is a simple and elegant platform dedicated to helping you explore,
          follow, and enjoy movies from around the world. Our mission is to provide a
          clean, fast, and friendly experience for every movie lover.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Le Nuage was created with the intention of making movie browsing easier. No
          ads, no noise, no frustration—just pure cinema discovery. Movies inspire us,
          and we want to share that inspiration.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>🎬 A constantly evolving film catalog</li>
          <li>⭐ Personalized recommendations</li>
          <li>📁 A clean and minimalist design</li>
          <li>📱 Full compatibility with all devices</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          We believe film deserves a beautiful and simple place online. That place is
          <strong className="font-semibold text-gray-800"> Le Nuage</strong>.
        </p>
      </div>
    </div>
  );
}
