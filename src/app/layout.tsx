import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Oswald, Roboto, Playfair_Display, Italiana, Mrs_Saint_Delafield } from "next/font/google";
import Providers from "@/app/Providers";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Simit Palace | Best Cafe Manchester | Breakfast Lunch",
  description:
    "Simit Palace Manchester was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.Best Cafe In Manchester",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const saint = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-saint",
  weight: ["400"],
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1314610519575108');
        fbq('track', 'PageView');
        ` }} />
        <noscript><img height="1" width="1" style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1314610519575108&ev=PageView&noscript=1"
        /></noscript>
      </head>
      <GoogleAnalytics gaId="G-XJC5SMRM7L" />
      <body
        className={cn(
          "theme-custom flex min-h-screen font-forum antialiased",
          manrope.variable,
          roboto.variable,
          playfair.variable,
          italiana.variable,
          saint.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}
