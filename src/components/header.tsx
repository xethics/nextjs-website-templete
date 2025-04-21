"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart, FileText, Home, Settings, Users, ChevronDown, ChevronUp } from "lucide-react"
import useDebounce from "@/hooks/useDebounce"
import clsx from "clsx"

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "#",
    description: "Get a bird's eye view of your business",
    submenu: [
      {
        title: "Analytics",
        href: "#",
        icon: Settings,
        description: "Key metrics and analytics",
        items: [
          { title: "Performance Metrics", href: "#" },
          { title: "Revenue Reports", href: "#" },
          { title: "User Analytics", href: "#" },
        ],
      },
      {
        title: "Monitoring",
        href: "#",
        icon: BarChart,
        description: "Key metrics and analytics",
        items: [
          { title: "System Status", href: "#" },
          { title: "Error Logs", href: "#" },
          { title: "Performance", href: "#" },
        ],
      },
      {
        title: "Resources",
        href: "#",
        icon: FileText,
        description: "Key metrics and analytics",
        items: [
          { title: "Documentation", href: "#" },
          { title: "Tutorials", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    href: "#",
    description: "Manage your customer relationships",
    submenu: [
      {
        title: "Customer Management",
        href: "#",
        icon: Users,
        description: "Key metrics and analytics",
        items: [
          { title: "All Customers", href: "https://google.com" },
          { title: "VIP Customers", href: "#" },
          { title: "New Customers", href: "#" },
        ],
      },
      {
        title: "Communication",
        href: "#",
        icon: FileText,
        description: "Key metrics and analytics",
        items: [
          { title: "Email Campaigns", href: "#" },
          { title: "SMS Notifications", href: "#" },
        ],
      },
    ],
  },
]

export function Logo({ className = "text-xl" }: { className?: string }) {
  return (
    <Link href="/">
      <span className={clsx(className, "text-primary")}>Logo</span>
    </Link>
  )
}

export default function NavMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveItem, setMobileActiveItem] = useState<string | null>(null) // NEW: Track expanded submenu
  const debouncedActiveItem = useDebounce(activeItem, 200) // 200ms debounce

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function toggleMobileSubmenu(title: string) {
    setMobileActiveItem(mobileActiveItem === title ? null : title)
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
    setMobileActiveItem(null)
  }

  return (
    <nav className="flex-grow-1 bg-white text-sm/loose text-gray-950 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex-grow-1">
        <div className="flex h-16 w-full justify-between px-4 md:px-0">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0 items-center">
              <Logo />
            </div>
            <div className="hidden justify-center sm:flex sm:space-x-4">
              {menuItems.map((navItem) => (
                <div
                  key={navItem.title}
                  className="group relative"
                  onMouseEnter={() => setActiveItem(navItem.title)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link
                    href={navItem.href}
                    className={`mt-1 inline-flex items-center rounded-md px-2 py-2 text-sm text-neutral-600 dark:text-neutral-400 ${debouncedActiveItem === navItem.title ? "hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white" : ""}`}
                  >
                    {/* <navItem.icon className="mr-2 h-4 w-4" /> */}
                    {navItem.title}
                  </Link>

                  {/* Wide Multi-Column Dropdown Menu */}
                  <div
                    className={`absolute z-50 mt-1 w-[500px] transform overflow-hidden rounded-lg bg-white text-sm/loose text-gray-950 shadow-lg transition-all duration-200 ease-in-out dark:bg-neutral-900 dark:text-white ${debouncedActiveItem === navItem.title ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"} border-1 border-neutral-200 dark:border-neutral-700`}
                    style={{ maxHeight: debouncedActiveItem === navItem.title ? "600px" : "0px" }}
                  >
                    {/* <div className="rounded-md px-4 py-2 md:bg-neutral-300 md:dark:bg-neutral-700 md:dark:text-white">
                      <h3 className="text-foreground text-sm font-medium">{navItem.title}</h3>
                      <p className="text-muted-foreground mt-1 text-xs">{navItem.description}</p>
                    </div> */}
                    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                      {navItem.submenu.map((obj, index) => (
                        <div key={index}>
                          <h4 className="text-md flex items-center font-semibold md:text-neutral-500">
                            <obj.icon strokeWidth={2} className="mr-2 h-4 w-4" />
                            <div className="text-md">{obj.title}</div>
                          </h4>

                          {obj.items.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              onClick={() => setActiveItem(null)}
                              className="dark:color:text-white flex items-center rounded-md px-6 py-2 transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            >
                              {/* <BarChart className="text-primary mr-2 h-4 w-4" /> */}
                              <span className="text-sm">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden w-[200px] sm:flex"></div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white sm:hidden dark:bg-neutral-900">
          <div className="space-y-1 pt-2 pb-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleMobileSubmenu(item.title)}
                  className={`flex w-full items-center justify-between ${mobileActiveItem === item.title ? "" : "border-b-1 border-neutral-200 dark:border-neutral-800"} px-3 py-4 pr-8 text-lg font-medium text-neutral-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-gray-800`}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.title}
                  </div>
                  <span>{mobileActiveItem === item.title ? <ChevronUp /> : <ChevronDown />}</span>
                </button>

                {/* Submenu */}
                {mobileActiveItem === item.title && (
                  <div className="space-y-1 border-b-1 border-neutral-200 pt-1 pb-2 pl-6 dark:border-neutral-800">
                    {item.submenu.map((subItem, index) => (
                      <div key={index} className="mt-6 first:mt-2">
                        <h4 className="mb-2 text-[16px] text-neutral-400 dark:text-neutral-500">{subItem.title}</h4>
                        {subItem.items.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href}
                            onClick={() => closeMobileMenu()}
                            className="block py-3 text-[16px] text-black hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
