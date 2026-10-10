import type { Metadata } from "next";
import "./globals.css";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://reidauber.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Bahiano Rei da 99 | Ajuda com cadastro Uber e 99",
  description: "Atendimento especializado para cadastro de motorista Uber e 99. Consulte valores e fale diretamente pelo WhatsApp.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
  openGraph: { title: "Bahiano Rei da 99", description: "Atendimento para motoristas Uber e 99", type: "website", locale: "pt_BR" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="pt-BR"><body>{children}</body></html>;
}
