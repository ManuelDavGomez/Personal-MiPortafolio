import Nav_mobile from "./components/navbar-mobile/Nav_mobile";
import Nav_pc from "./components/navbar-pc/Nav_pc";
import "./globals.css";
import dynamic from "next/dynamic";
import { Orbitron, Raleway } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

import Foot from "./components/foot/Foot";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  variable: "--font-raleway",
});

// const Particless = dynamic(
//   () => import("@/app/components/Particle/Particless"),
//   {
//     ssr: false,
//   }
// );

export const metadata = {
  title: "ManuelDav - Full Stack Developer",
  description:
    "Explora mi portafolio web Full Stack: Hola me llamo Manuel David Gomez. Descubra una muestra de mi trabajo y espero les guste.",
  icons: {
    icon: "/img/logo.avif",
    apple: "/img/logo.avif",
  },
  keywords: [
    "Desarrollo front-end",
    "Diseño web responsive",
    "Diseño interactivo",
    "Desarrollo web moderno",
    "Portafolio de diseño web",
    "Nextjs",
    "React",
    "Animaciones web",
  ],
  openGraph: {
    title: "ManuelDav - Full Stack Developer",
    description: "Full Stack Developer Portafolio Website",
    url: "https://manueldav.netlify.app/",
    siteName: "Full Stack",
    images: [
      {
        url: "/img/logo.avif",
        width: 600,
        height: 600,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="43200" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${orbitron.variable} ${raleway.variable}`}
      >
        <header>
          <Nav_mobile />
          <Nav_pc />
        </header>

        {/* <article style={{ zIndex: "-1", position: "absolute" }}>
          <Particless />
        </article> */}

        {children}

        <Foot />
      </body>
    </html>
  );
}
