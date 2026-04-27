import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { MagneticCursor } from "../components/MagneticCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background container-edge">
      <div className="max-w-md text-center">
        <p className="text-mono-label text-smoke">Error · 404</p>
        <h1 className="mt-6 text-display-lg text-titanium">Signal lost.</h1>
        <p className="mt-4 text-sm font-light text-smoke">
          The coordinate you requested is not part of the Evolvix ecosystem.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="text-mono-label text-titanium link-line"
          >
            Return to Index
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#050505" },
      { title: "Evolvix Global — The Architecture of Success" },
      {
        name: "description",
        content:
          "Evolvix Global leads the evolution of strategic assets and services. International holding across logistics, capital, intelligence and digital infrastructure.",
      },
      { name: "author", content: "Evolvix Global Group" },
      { property: "og:title", content: "Evolvix Global — The Architecture of Success" },
      {
        property: "og:description",
        content:
          "International holding leading the evolution of strategic assets and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.cdnfonts.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Loader />
      <MagneticCursor />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
