import {
  Outlet,
  Link,
  createRootRoute,
} from "@tanstack/react-router";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { MagneticCursor } from "../components/MagneticCursor";
import { LanguageProvider } from "../lib/LanguageContext";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <LanguageProvider>
      <Loader />
      <MagneticCursor />
      <div className="min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
