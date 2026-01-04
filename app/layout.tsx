import type { Metadata } from "next";
import { Space_Grotesk} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceGroteskMono = Space_Grotesk({
  variable: "--font-space-grotesk-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanish-folio",
  description: "I write code, fix bugs, and pretend it was all planned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${spaceGroteskMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


