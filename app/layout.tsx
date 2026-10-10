import type { Metadata } from "next";
import "./globals.css";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://reidauber.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "Bahiano Rei da 99 | Cadastro Uber e documento do carro",
  description: "Atendimento especializado para cadastro de motorista Uber e documentação do veículo. Consulte valores e fale diretamente pelo WhatsApp.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
  openGraph: { title: "Bahiano Rei da 99", description: "Atendimento para cadastro Uber e documento do carro", type: "website", locale: "pt_BR" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="pt-BR"><body>{children}</body></html>;
}
