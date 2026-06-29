import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalSpark AI — WhatsApp AI Chatbots for Local Businesses",
  description:
    "LocalSpark AI builds WhatsApp AI chatbots for coaching institutes, clinics, gyms, salons, and local businesses. Upload your schedule. Let WhatsApp answer the questions.",
  keywords: [
    "WhatsApp chatbot",
    "AI chatbot",
    "coaching institute chatbot",
    "local business AI",
    "WhatsApp automation",
    "GTB Nagar",
    "Mukherjee Nagar",
  ],
  openGraph: {
    title: "LocalSpark AI — WhatsApp AI Chatbots for Local Businesses",
    description:
      "Upload your schedule, PDFs, or documents. Let WhatsApp answer your students and customers automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
