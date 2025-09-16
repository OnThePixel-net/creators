import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0f0f23',
}

export const metadata: Metadata = {
  title: "Icebook - Gaming • Entertainment • Community",
  description: "Icebook - Deine Anlaufstelle für Gaming, Entertainment und Community. Folge uns auf Twitch, Discord, TikTok und mehr!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
