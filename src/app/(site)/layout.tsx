import { FooterMetaMobile, FooterSitemap } from "@/components/footer"
import NavMenu from "@/components/header"
interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main>
      <div className="text-soft-black relative min-h-screen font-normal">
        <div className="min-w-dhw max-w-screen dark:bg-neutral-950">
          {/* Header */}
          <div className="fixed inset-x-0 top-0 z-10 border-b border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="m-auto flex lg:w-[1024px] lg:px-6">
              <NavMenu />
            </div>
          </div>
          {/* Container */}
          <div className="mx-auto flex pt-16 lg:w-[1024px] lg:px-6">{children}</div>
          {/* Footer */}
          <div className="border-t-1 border-neutral-200 dark:border-neutral-800">
            <div className="m-auto w-full grid-cols-1 lg:w-[1024px] lg:px-6">
              <FooterSitemap />
              <FooterMetaMobile className="text-md px-4 md:px-6 lg:px-8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
