import type { Metadata } from "next"
import "@/style/globals.css"
import { cn } from "@/lib/utils"
import { geistSans, geistMono } from "@/lib/fonts"
import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/theme-toggle"

const js = String.raw

// [ToDo] move this out from here
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Server Components", "Radix UI"],
  authors: [
    {
      name: "website",
      url: "https://website.com",
    },
  ],
  creator: "website",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@website",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("antialiased", geistSans.variable, geistMono.variable)} suppressHydrationWarning>
      <head>
        <script
          // Ref: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/app/layout.tsx
          dangerouslySetInnerHTML={{
            __html: js`
              try {
                _updateTheme(localStorage.currentTheme)
              } catch (_) {}

              try {
                if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
                  document.documentElement.classList.add('os-macos')
                }
              } catch (_) {}

              function _updateTheme(theme) {
                let classList = document.documentElement.classList;

                classList.remove("light", "dark", "system");
                document.querySelectorAll('meta[name="theme-color"]').forEach(el => el.remove())
                if (theme === 'dark') {
                  classList.add('dark')

                  let meta = document.createElement('meta')
                  meta.name = 'theme-color'
                  meta.content = 'oklch(.13 .028 261.692)'
                  document.head.appendChild(meta)
                } else if (theme === 'light') {
                  classList.add('light')

                  let meta = document.createElement('meta')
                  meta.name = 'theme-color'
                  meta.content = 'white'
                  document.head.appendChild(meta)
                } else {
                  classList.add('system')

                  let meta1 = document.createElement('meta')
                  meta1.name = 'theme-color'
                  meta1.content = 'oklch(.13 .028 261.692)'
                  meta1.media = '(prefers-color-scheme: dark)'
                  document.head.appendChild(meta1)

                  let meta2 = document.createElement('meta')
                  meta2.name = 'theme-color'
                  meta2.content = 'white'
                  meta2.media = '(prefers-color-scheme: light)'
                  document.head.appendChild(meta2)
                }
              }
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="isolate md:isolation-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
