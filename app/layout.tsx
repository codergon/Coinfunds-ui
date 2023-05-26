import "@/styles/index.scss";
import { Metadata } from "next";
import { roobert } from "@/styles/font";

export const metadata: Metadata = {
  title: "Coinfunds",
  description: "Coinfunds - Efficient Crowdfunding powered by Circle",
  twitter: {
    card: "summary_large_image",
    title: "Coinfunds - Efficient Crowdfunding powered by Circle",
    description:
      "Coinfunds is a crowdfunding platform powered by Circle that allows you to raise funds for your projects and ideas.",
    creator: "@thealpha_knight",
  },
  metadataBase: new URL("https://coinfunds.vercel.app"),
  themeColor: "#FFF",
  openGraph: {
    title: "Coinfunds - Efficient Crowdfunding powered by Circle",
    description:
      "Coinfunds is a crowdfunding platform powered by Circle that allows you to raise funds for your projects and ideas.",
    url: "https://coinfunds.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roobert.className}>{children}</body>
    </html>
  );
}
