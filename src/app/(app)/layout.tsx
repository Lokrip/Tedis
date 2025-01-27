import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import Layout from "../../components/layouts/Layout";
import MainHtml from "../html";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  weight: "500",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainHtml className={`${geistSans.variable}`}>
        <Layout>
          {children}
        </Layout>
    </MainHtml>
  );
}
