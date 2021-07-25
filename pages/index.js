import Head from "next/head";
import ar from "../locales/ar";
import en from "../locales/en";
import { useRouter } from "next/router";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Languages from "../components/Languages";

export default function Home() {
  const { locale } = useRouter();
  console.log(locale);
  const t = locale === "ar-EG" ? ar : en;

  const [enabled, setEnabled] = useState(false);

  return (
    <div className={"flex flex-col min-h-screen " + ` ${enabled && "dark"}`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-grow dark:bg-gray-800">
        <div className="flex w-full px-3 py-5 flex-row-reverse items-center justify-between">
          <ThemeToggle enabled={enabled} setEnabled={setEnabled} />
          <Languages />
        </div>

        <div className="flex-grow flex items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold dark:text-yellow-400">
            {t.greeting}
          </h1>
        </div>
      </main>
    </div>
  );
}
