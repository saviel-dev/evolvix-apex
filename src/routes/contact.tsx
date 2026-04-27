import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Evolvix Global" },
      {
        name: "description",
        content:
          "Partner access and corporate enquiries to Evolvix Global Group. Madrid · London · Dubai · Singapore.",
      },
      { property: "og:title", content: "Contact — Evolvix Global" },
    ],
  }),
  component: ContactPage,
});

const OFFICES = [
  { city: "Madrid", line: "Paseo de la Castellana, 28046", email: "madrid@evolvix.global" },
  { city: "London", line: "1 Finsbury Avenue, EC2M 2PF", email: "london@evolvix.global" },
  { city: "Dubai", line: "DIFC Gate Village, Tower 7", email: "dubai@evolvix.global" },
  { city: "Singapore", line: "Marina Bay Financial Centre", email: "singapore@evolvix.global" },
];

function ContactPage() {
  return (
    <>
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">Section · Contact</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[14ch]">
              By introduction only.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              Evolvix Global opera con un círculo restringido de socios
              estratégicos. Los nuevos mandatos se evalúan trimestralmente.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="container-edge pb-24 md:pb-32">
          <div className="grid grid-cols-1 gap-16 border-t border-hairline pt-16 md:grid-cols-12">
            <Reveal variant="up" className="md:col-span-5">
              <p className="text-mono-label text-smoke">Partner Access</p>
              <h2 className="mt-6 text-display-md text-titanium max-w-[14ch]">
                Request a private briefing.
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-smoke">
                Indique su perfil corporativo y la división de interés. Le
                responderá un partner senior en 72 horas.
              </p>
            </Reveal>

            <Reveal variant="up" delay={120} className="md:col-span-7">
              <form
                className="grid grid-cols-1 gap-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <Field label="Name" name="name" />
                <Field label="Organization" name="org" />
                <Field label="Email" type="email" name="email" />
                <Field label="Mandate" name="mandate" placeholder="Logistics · Capital · Intelligence · Infrastructure" />
                <Field label="Message" name="message" textarea />
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-titanium transition-colors duration-500 hover:bg-titanium hover:text-background"
                >
                  Submit Request
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                    <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" />
                  </svg>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-hairline bg-background">
        <div className="container-edge py-20 md:py-28">
          <p className="text-eyebrow">Offices</p>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-background p-6 md:p-8">
                <p className="text-mono-label text-electric">{o.city}</p>
                <p className="mt-4 text-sm font-light text-titanium">{o.line}</p>
                <a
                  href={`mailto:${o.email}`}
                  className="mt-4 inline-flex text-mono-label text-smoke link-line"
                >
                  {o.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "mt-3 w-full bg-transparent border-b border-hairline py-3 text-titanium placeholder:text-smoke/60 focus:outline-none focus:border-titanium transition-colors duration-500";
  return (
    <label className="block">
      <span className="text-mono-label text-smoke">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          className={`${base} resize-none`}
        />
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
