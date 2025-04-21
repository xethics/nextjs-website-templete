// Ref: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/components/footer.tsx

import clsx from "clsx"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { siteMap, SitemMapItemType } from "@/config/siteMap"
import { Logo } from "./header"

//[ToDo] Update FooterSitemap also
export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer className="w-full bg-white text-sm/loose text-neutral-950 dark:bg-neutral-950 dark:text-white">
      {/* Mobile */}
      <div className={clsx("grid grid-cols-2 gap-8 p-6 md:hidden md:p-4", className)}>
        {siteMap?.map((item, index) => (
          <div key={index} className="flex flex-1 flex-col gap-5">
            {FooterSitemapItem(item)}
          </div>
        ))}
      </div>
      {/* Non Mobile */}
      <div
        className={clsx(
          "mx-auto hidden w-full grid-cols-5 justify-between gap-y-0 md:grid md:grid-cols-[300px_1fr_1fr_1fr_1fr] md:gap-6 md:gap-x-4 lg:gap-8",
          className,
        )}
      >
        <div className="">
          <FooterMetaSection />
        </div>
        {siteMap?.map((item, index) => (
          <div key={index} className="py-10">
            {FooterSitemapItem(item)}
          </div>
        ))}
      </div>
    </footer>
  )
}

export function FooterMetaSection() {
  return (
    <div className="px-2 pt-10 pb-10">
      <div className={clsx("mx-auto flex w-full flex-col items-start gap-6")}>
        <Logo className="text-md" />
        <div className="flex flex-col gap-2 text-sm/6 text-gray-700 dark:text-gray-400">
          <span>Copyright ©&nbsp;2025&nbsp;Website</span>
          <Link href="/brand" className="hover:underline">
            Trademark Policy
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export function FooterMetaMobile({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-10 md:hidden">
      <div
        className={clsx(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <Logo className="text-md" />
        <div className="flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>Copyright ©&nbsp;2025&nbsp;Website</span>
          <span className="max-sm:hidden">&middot;</span>
          <Link href="/brand" className="hover:underline">
            Trademark Policy
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

function FooterSitemapItem(obj: SitemMapItemType) {
  return (
    <>
      <h3 className="text-semibold text-gray-500 dark:md:text-white">{obj?.title}</h3>
      <ul className="grid gap-2 md:mt-4 md:gap-1">
        {obj?.items?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link}
              className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white md:dark:text-neutral-400"
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
