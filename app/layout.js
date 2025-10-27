import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarLayout from "@/components/Sidenav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Money Management",
  description: "desc of the moneymanagement",
  icons: {
    icon: "/logo.svg", // path to your favicon
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
