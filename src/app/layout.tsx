import { Nunito_Sans } from "next/font/google";
import "@styles/globals.css";

const inter = Nunito_Sans({
  style: "normal",
  fallback: ["Arial"],
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Countries",
  description: "List Of Countries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pngegg.png" type="image/png" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
