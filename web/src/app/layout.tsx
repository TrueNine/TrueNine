import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueNine — Engineer & Accessibility Advocate",
  description: "TrueNine builds accessible, maintainable open-source software and practical AI-assisted engineering tools.",
  openGraph: { title: "TrueNine", description: "Build thoughtfully. Share openly.", type: "website" },
};

export const viewport: Viewport = { themeColor: "#f3f0e9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
