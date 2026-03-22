import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import HeroStars2D from "@/components/HeroStars2D";
import { AuthProvider } from "@/components/AuthContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://comet.iitr.ac.in"),
  title: {
    default: "COMET'26 — CDC, IIT Roorkee",
    template: "%s | COMET'26",
  },
  description: "COMET is the annual techno-management fest of IIT Roorkee, organized by the Career Development Cell.",
  keywords: ["COMET", "COMET 26", "COMET'26", "Comet IIT Roorkee", "Comet College Fest", "Comet Technical Fest", "Comet Cultural Fest", "IIT Roorkee", "Techno-Management Fest", "CDC", "Career Development Cell", "Hackathon", "Case Study", "Robotics", "Finance", "Coding"],
  authors: [{ name: "Career Development Cell, IIT Roorkee" }],
  creator: "Career Development Cell, IIT Roorkee",
  publisher: "Career Development Cell, IIT Roorkee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "COMET'26 — CDC, IIT Roorkee",
    description: "Designing the future. Join us for the ultimate techno-management experience.",
    url: "https://comet.iitr.ac.in",
    siteName: "COMET'26",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMET'26 — CDC, IIT Roorkee",
    description: "Designing the future. Join us for the ultimate techno-management experience.",
    creator: "@cdc_iitr",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "COMET'26",
              "startDate": "2026-04-11",
              "endDate": "2026-04-12",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "IIT Roorkee",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Roorkee - Haridwar Highway",
                  "addressLocality": "Roorkee",
                  "postalCode": "247667",
                  "addressRegion": "Uttarakhand",
                  "addressCountry": "IN"
                }
              },
              "image": [
                "https://comet.iitr.ac.in/logos/cdc_3d.png",
                "https://comet.iitr.ac.in/logos/iitr_3d.png"
              ],
              "description": "COMET is the annual techno-management fest of IIT Roorkee, organized by the Career Development Cell.",
              "organizer": {
                "@type": "Organization",
                "name": "Career Development Cell, IIT Roorkee",
                "url": "https://comet.iitr.ac.in"
              }
            })
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v5ztjyk99n");
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PK8594TV');
          `}
        </Script>
      </head>
      <body>
        <AuthProvider>
          <HeroStars2D />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PK8594TV"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Preloader />
          <Cursor />
          <div className="app-shell">
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
