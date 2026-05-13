import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Regular.otf",
  variable: "--font-clash",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});