export default function TermsPage() {
  return (
    <div className="mt-22 min-h-screen bg-[#e9ecff] flex items-center justify-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-md p-10 text-primary">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <p className="text-lg mb-6 text-center">
          Please read these terms carefully before using Le Nuage.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of the Platform</h2>
        <p className="mb-4">
          Le Nuage is provided for personal and non-commercial use only.
          Users must comply with all applicable laws and refrain from any misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Accounts</h2>
        <p className="mb-4">
          When creating an account, you agree to provide accurate and up-to-date
          information. You are responsible for maintaining the confidentiality
          of your login details.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Content</h2>
        <p className="mb-4">
          All film data is sourced from external APIs. We do not guarantee
          accuracy, completeness, or availability of any movie.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Privacy</h2>
        <p className="mb-4">
          We respect your privacy. For more information, see our
          <a href="/gdpr" className="underline ml-1 text-primary hover:opacity-80">GDPR policy</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
        <p className="mb-6">
          Le Nuage is provided &quot;as is&quot; without warranties. We are not liable for
          any damages resulting from usage or downtime.
        </p>

        <p className="font-medium text-center">
          By using our service, you accept these terms.
        </p>
      </div>
    </div>
  );
}
