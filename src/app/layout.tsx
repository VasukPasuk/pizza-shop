import type {Metadata} from "next";
import {Inter, Roboto} from "next/font/google";
import "./globals.scss";
import React from "react";
import Providers from "@/redux/provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({subsets: ["latin"], weight: "300"});
export const metadata: Metadata = {
  title: "Pizza shop",
  description: "By tasty pizza here!)",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en" data-mode={"light"}>
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
          <ToastContainer/>
        </body>
      </html>
  );
}
