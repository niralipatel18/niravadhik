import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "નિરવધિક — સાહિત્ય | સિનેમા | સંગીત",
  description:
    "નિરવધિક: ગુજરાતી સાહિત્ય, સિનેમા અને સંગીતનો સંગમ. ગાંધીનગર. 'કોઈ કલા સ્વરૂપે જગતથી જુદા બનો.'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gu">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
