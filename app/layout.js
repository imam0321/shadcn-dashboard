import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Header } from "@/components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-between items-start`}
      >
        <div className="hidden md:flex min-w-[300px] min-h-screen">
          <Sidebar />
        </div>
        <main className="w-full h-full">
          <Header />
          <div className="p-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
