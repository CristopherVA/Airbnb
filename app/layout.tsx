import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modal/Modal";

export const metadata = {
  title: "Aribnb",
  description: "Aribnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen={true} title="Hello World" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
