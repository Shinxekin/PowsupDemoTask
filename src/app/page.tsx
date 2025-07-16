import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-mono text-center py-4">Homepage</p>
      <Link href="/utenti">
        <button className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900 rounded-full">
          Vai alla lista utenti
        </button>
      </Link>
    </div>
  );
}
