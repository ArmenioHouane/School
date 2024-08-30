"use client";
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="dark:bg-gray-800 bg-[#e4e2e270] p-4 text-black dark:text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold mb-2">Landing Page</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#hero" className="hover:underline">
                Hero
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#newsletter" className="hover:underline">
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/admin" className="hover:underline">
                Admin
              </Link>
            </li>
            <li>
              <Link href="/dashboard/aluno" className="hover:underline">
                Aluno
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <div className="container mx-auto text-sm text-center md:text-right">
        &copy; {new Date().getFullYear()} MyApp. Todos os direitos reservados.
      </div>
    </footer>
  );
}