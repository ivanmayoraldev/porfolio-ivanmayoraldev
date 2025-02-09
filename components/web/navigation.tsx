import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center gap-4 mb-6">
      <Link
        href="/web"
        className="px-4 py-2 rounded-md border-2 transition-colors border-blue-500 bg-black text-white hover:border-blue-600"
      >
        WEB
      </Link>
      <Link
        href="/vfx"
        className="px-4 py-2 rounded-md border-2 transition-colors border-green-500 bg-black text-white hover:border-green-600"
      >
        VFX
      </Link>
    </nav>
  );
}