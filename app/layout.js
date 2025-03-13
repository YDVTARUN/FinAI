import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*header*/}
          <Header />

          {/*main*/}
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/*footer*/}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Your One Stop Solution For Tracking Finances</p>
              
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
