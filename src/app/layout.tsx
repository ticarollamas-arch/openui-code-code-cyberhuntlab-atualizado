import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { 
  title: "OpenUI Code Code · Cyber Hunt Lab", 
  description: "OpenUI Code Code — plataforma de programação com agentes, edição de projetos ZIP, modelos de IA e integração com GitHub." 
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
