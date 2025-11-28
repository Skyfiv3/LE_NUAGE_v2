import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-16 py-8 bg-secondary">
      <p className="text-xl">Le Nuage</p>
      <div className="flex items-center space-x-16 mr-16">
        <div className="flex flex-col space-y-8">
          <Link href="/about-us" className="text-primary hover:underline">About us</Link>
          <Link href="/goals" className="hover:underline">Our goals</Link>
        </div>
        <div className="flex flex-col space-y-8">
          <Link href="/terms" className="text-primary hover:underline">Terms</Link>
          <Link href="/gdpr" className="hover:underline">GDPR</Link>
        </div>
        <div className="flex flex-col space-y-8">
          <Link href="#" className="text-primary hover:underline">Contact</Link>
          <Link href="#" className="hover:underline">Help</Link>
        </div>
      </div>
    </footer>
  );
}
