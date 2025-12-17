import { Montserrat, PT_Serif } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://chasetiptonphotography.com"), // Update with your actual domain
  title: {
    default: "Chase Tipton Photography | Professional Photographer Portfolio",
    template: "%s | Chase Tipton Photography",
  },
  description:
    "Award-winning professional photography by Chase Tipton. Specializing in portrait, landscape, and wedding photography. View portfolio and book your session today.",
  keywords: [
    "Chase Tipton",
    "Professional Photographer",
    "Photography Portfolio",
    "Portrait Photography",
    "Landscape Photography",
    "Wedding Photography",
    "California Photographer",
    "Professional Photography Services",
  ],
  authors: [{ name: "Chase Tipton" }],
  creator: "Chase Tipton",
  publisher: "Chase Tipton",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Chase Tipton Photography | Professional Photographer Portfolio",
    description:
      "Award-winning professional photography by Chase Tipton. Specializing in portrait, landscape, and wedding photography.",
    url: "https://chasetiptonphotography.com",
    siteName: "Chase Tipton Photography",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chase Tipton Photography Portfolio - Professional Photography Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chase Tipton Photography | Professional Photographer Portfolio",
    description:
      "Award-winning professional photography by Chase Tipton. View portfolio and book your session.",
    images: ["/og-image.jpg"],
    creator: "@chasetiptonphoto", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add after setting up Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1d1c1c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://chasetiptonphotography.com" />
      </head>
      <body className={`${montserrat.variable} ${ptSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
