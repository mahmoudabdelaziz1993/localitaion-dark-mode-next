import { useRouter } from "next/router";
import { useState } from "react";
function Languages() {
  const router = useRouter();
  const { locale } = router;
  const [open, setOpen] = useState(false);

  const changeLocale = (lang) => {
    router.push("/", "/", { locale: lang });
    setOpen(false);
  };

  return (
    <div className="inline-flex items-center">
      <div
        className={
          open
            ? " relative inline-flex h-[34px] w-[34px] justify-center items-center rounded-full bg-gray-900 text-gray-400 dark:text-black cursor-pointer dark:bg-yellow-500 dark:hover:bg-yellow-400 "
            : "relative inline-flex h-[34px] w-[34px] justify-center items-center rounded-full bg-gray-400 cursor-pointer dark:bg-yellow-300 dark:hover:bg-yellow-400  "
        }
        onClick={() => setOpen(!open)}
      >
        {!open && (
          <span
            className={`absolute top-0 flex w-auto h-auto px-1 text-xs font-semibold text-black uppercase bg-yellow-700 rounded-full left-6`}
          >
            {locale.substring(0, 2)}
          </span>
        )}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {open && (
        <>
          <div
            className={
              locale === "en-US"
                ? "inline-flex h-[22px] w-[22px] cursor-pointer justify-center items-center rounded-full bg-gray-900 text-gray-400 dark:text-black hover:text-black hover:bg-gray-600 dark:bg-yellow-300 dark:hover:bg-yellow-400 mx-3 ring-4 ring-gray-800 dark:ring-yellow-600 ring-offset-2 ring-offset-current"
                : "inline-flex h-[22px] w-[22px] cursor-pointer justify-center items-center rounded-full bg-gray-400 hover:bg-gray-600 dark:bg-yellow-300 dark:hover:bg-yellow-500 mx-3"
            }
            onClick={() => changeLocale("en-US")}
          >
            <span className="text-xs font-bold">EN</span>
          </div>
          <div
            className={
              locale === "ar-EG"
                ? "inline-flex h-[22px] w-[22px] cursor-pointer justify-center items-center rounded-full bg-gray-900 text-gray-400 dark:text-black hover:text-black hover:bg-gray-600 dark:bg-yellow-300 dark:hover:bg-yellow-400 mx-3 ring-4 ring-gray-800 dark:ring-yellow-600 ring-offset-2 ring-offset-current"
                : "inline-flex h-[22px] w-[22px] cursor-pointer justify-center items-center rounded-full bg-gray-400 hover:bg-gray-600 dark:bg-yellow-300 dark:hover:bg-yellow-400"
            }
            onClick={() => changeLocale("ar-EG")}
          >
            <span className="text-xs font-bold">AR</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Languages;
