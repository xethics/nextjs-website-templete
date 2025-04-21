import { Geist, Geist_Mono, Poppins } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const poppinsThin = Poppins({
  variable: "--font-poppins-thin",
  subsets: ["latin"],
  weight: "100",
})

const poppinsRegular = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "300",
})

const poppinsMedium = Poppins({
  variable: "--font-poppins-semibold",
  subsets: ["latin"],
  weight: "500",
})

const poppinsSemiBold = Poppins({
  variable: "--font-poppins-semibold",
  subsets: ["latin"],
  weight: "700",
})

const poppinsBold = Poppins({
  variable: "--font-poppins-semibold",
  subsets: ["latin"],
  weight: "900",
})

export { geistSans, geistMono, poppinsThin, poppinsRegular, poppinsMedium, poppinsSemiBold, poppinsBold }
