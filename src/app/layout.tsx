import "./globals.css";
import { Providers } from "./providers";
import { ClientLayout } from "@/components/ClientLayout";
import { TempoInit } from "@/components/tempo-init";
import Script from "next/script";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      </head>
      <body>
        <Providers>
          <ClientLayout />
          {children}
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
