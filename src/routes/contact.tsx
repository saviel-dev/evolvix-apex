import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import { useState } from "react";

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
  { city: "Madrid",    line: "Paseo de la Castellana, 28046", email: "madrid@evolvix.global" },
  { city: "London",   line: "1 Finsbury Avenue, EC2M 2PF",   email: "london@evolvix.global" },
  { city: "Dubai",    line: "DIFC Gate Village, Tower 7",     email: "dubai@evolvix.global" },
  { city: "Singapore",line: "Marina Bay Financial Centre",    email: "singapore@evolvix.global" },
];

function ContactPage() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const p = t.contactPage;
  const f = p.fields;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // We append the FormSubmit configurations
    const formData = new FormData(e.currentTarget);
    formData.append("_captcha", "false");
    formData.append("_subject", "Nuevo contacto desde Evolvix Global");
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/saviel.dev@gmail.com", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        }
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">{p.sectionEyebrow}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[14ch]">
              {p.heading}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              {p.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="container-edge pb-24 md:pb-32">
          <div className="grid grid-cols-1 gap-16 border-t border-hairline pt-16 md:grid-cols-12">
            <Reveal variant="up" className="md:col-span-5">
              <p className="text-mono-label text-smoke">{p.accessLabel}</p>
              <h2 className="mt-6 text-display-md text-titanium max-w-[14ch]">
                {p.accessHeading}
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-smoke">
                {p.accessBody}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={120} className="md:col-span-7 mt-8 md:mt-0">
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-surface/40 p-6 sm:p-10 border border-hairline"
                onSubmit={handleSubmit}
              >
                
                <div className="sm:col-span-1">
                  <Field label={f.name} name="name" placeholder={f.namePlaceholder} required />
                </div>
                <div className="sm:col-span-1">
                  <Field label={f.org} name="org" placeholder={f.orgPlaceholder} />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.email} type="email" name="email" placeholder={f.emailPlaceholder} required />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.mandate} name="mandate" placeholder={f.mandatePlaceholder} />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.message} name="message" textarea placeholder={f.messagePlaceholder} required />
                </div>
                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="inline-flex w-full sm:w-fit justify-center items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-background bg-titanium transition-colors duration-500 hover:bg-transparent hover:text-titanium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (lang === "es" ? "ENVIANDO..." : "SENDING...") : status === "success" ? (lang === "es" ? "ENVIADO" : "SENT") : f.submit}
                    {status !== "success" && status !== "loading" && (
                      <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                        <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" />
                      </svg>
                    )}
                  </button>
                  {status === "success" && (
                    <p className="mt-4 text-sm text-gold">
                      {lang === "es" ? "Mensaje enviado con éxito. Nos pondremos en contacto." : "Message sent successfully. We will be in touch."}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 text-sm text-destructive">
                      {lang === "es" ? "Error al enviar el mensaje. Inténtalo de nuevo." : "Error sending message. Please try again."}
                    </p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-hairline bg-background">
        <div className="container-edge py-20 md:py-28">
          <p className="text-eyebrow">{p.officesLabel}</p>
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
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
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
          required={required}
          className={`${base} resize-none`}
        />
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} className={base} />
      )}
    </label>
  );
}
