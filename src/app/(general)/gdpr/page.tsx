import React from "react";

export default function GdprPage() {
  return (
    <div className="mt-22 min-h-screen bg-[#e9ecff] text-gray-800">
      <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#3d3f5b] mb-6">
          GDPR — Data Protection & Privacy
        </h1>

        <p className="text-sm leading-6 mb-4">
          At <strong>Le Nuage</strong>, we take your privacy and data protection very seriously.
          This page explains how we collect, store, and process your personal data in compliance with the
          <strong> General Data Protection Regulation (GDPR)</strong>.
        </p>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">1. What Data We Collect</h2>
        <p className="text-sm leading-6 mt-2">We may collect the following categories of personal information:</p>
        <ul className="list-disc ml-6 mt-2 text-sm leading-6">
          <li>Account information (username, email)</li>
          <li>Profile details (optional bio, favorite movies, preferences)</li>
          <li>Usage information (pages visited, interactions with the platform)</li>
          <li>Technical information (IP address, browser type, device details)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">2. Why We Collect Your Data</h2>
        <p className="text-sm leading-6 mt-2">Your data is collected for purposes such as:</p>
        <ul className="list-disc ml-6 mt-2 text-sm leading-6">
          <li>Providing access to platform features</li>
          <li>Improving recommendations and user experience</li>
          <li>Ensuring platform security</li>
          <li>Sending service notifications (optional)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">3. Your Rights Under GDPR</h2>
        <p className="text-sm leading-6 mt-2">You have the right to:</p>
        <ul className="list-disc ml-6 mt-2 text-sm leading-6">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your data (Right to be forgotten)</li>
          <li>Request limitations on data processing</li>
          <li>Download your data (Data portability)</li>
          <li>Withdraw your consent at any time</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">4. How Your Data Is Stored</h2>
        <p className="text-sm leading-6 mt-2">
          Your information is securely stored on encrypted servers. We implement strong security measures to protect your data.
        </p>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">5. Sharing Your Data</h2>
        <p className="text-sm leading-6 mt-2">
          We do <strong>not</strong> sell or trade your personal information. Your data may only be shared with:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm leading-6">
          <li>Trusted service providers (hosting, analytics)</li>
          <li>Authorities, only when legally required</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#3d3f5b] mt-8">6. Contact Us</h2>
        <p className="text-sm leading-6 mt-2">
          If you have any questions about your privacy or GDPR rights, you can contact us at:
          <strong> privacy@lenuage.com</strong>
        </p>
      </div>
    </div>
  );
}
