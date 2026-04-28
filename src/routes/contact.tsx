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
      // Use URLSearchParams to avoid CORS preflight block on FormSubmit
      const res = await fetch("https://formsubmit.co/ajax/saviel.dev@gmail.com", {
        method: "POST",
        body: new URLSearchParams(formData as any).toString(),
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
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
          <div className="grid grid-cols-1 gap-16 border-t border-hairline pt-24 md:pt-32 md:grid-cols-12">
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
                  
                  {/* Microcopy - reduce friction */}
                  <div className="mt-4 text-xs font-light text-smoke">
                    {p.microcopy}
                  </div>
                  
                  {/* WhatsApp CTA */}
                  <div className="mt-6">
                    <a
                      href="https://wa.me/34XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-mono-label text-gold hover:text-gold/80 transition-colors duration-200"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 2.398 3.922c3.023 2.098 3.023 1.397 3.57 1.311.547-.086 1.758-.718 2.006-1.414.248-.696.248-1.291.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                      </svg>
                      {p.whatsappCTA}
                    </a>
                  </div>
                  
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
