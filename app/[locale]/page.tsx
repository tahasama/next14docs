import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Params {
  lang: string;
}

export default function Home({ params: { lang } }: { params: Params }) {
  const t = useTranslations("HomePage");

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[calc(100vh-28px)]  text-gray-800 p-8 pb-20 gap-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-700">My Website</h1>
        <div>
          <h1>{t("title")}</h1>
          <Link href="/about">{t("about")}</Link>
        </div>
      </header>

      <main className="space-y-6 text-center max-w-2xl border-2 border-slate-700 border-b-slate-600  rounded-lg p-4">
        <section id="home" className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-600">
            Welcome to My Website
          </h2>
          <p className="text-gray-400">
            This is the main content area where you can add your content.
          </p>
        </section>

        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-600">About Us</h2>
          <p className="text-gray-400">
            Learn more about what we do and our mission.
          </p>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-600">Contact Us</h2>
          <p className="text-gray-400">
            Feel free to reach out to us for more information.
          </p>
        </section>
      </main>

      <footer className="flex flex-col items-center space-y-2 text-gray-300 text-sm">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p>
          <a href="mailto:info@mywebsite.com" className="hover:underline">
            info@mywebsite.com
          </a>
        </p>
      </footer>
    </div>
  );
}
