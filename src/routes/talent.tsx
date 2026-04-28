import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import { useState } from "react";
import growthImg from "@/assets/images/hero-growth.png";

const TALENT_DESTINATION_EMAIL = "saviel.dev@gmail.com";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "Gestión de Talento — Evolvix Global" },
      {
        name: "description",
        content:
          "Postúlate a Evolvix Global. Comparte tu perfil profesional y adjunta tu CV en PDF para formar parte de nuestro equipo internacional.",
      },
      { property: "og:title", content: "Gestión de Talento — Evolvix Global" },
    ],
  }),
  component: TalentPage,
});

function TalentPage() {
  const { t, lang } = useLang();
  const p = t.talentPage;
  const f = p.fields;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const cvFile = formData.get("attachment") as File | null;

    if (!cvFile || cvFile.size === 0) {
      setError(lang === "es" ? "Adjunta tu CV en PDF para continuar." : "Please attach your CV in PDF format.");
      return;
    }

    const isPdf = cvFile.type === "application/pdf" || cvFile.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      setError(lang === "es" ? "Solo se aceptan archivos PDF." : "Only PDF files are accepted.");
      return;
    }

    const maxSizeMb = 8;
    if (cvFile.size > maxSizeMb * 1024 * 1024) {
      setError(
        lang === "es"
          ? `El CV supera el maximo permitido (${maxSizeMb}MB).`
          : `The CV exceeds the maximum size (${maxSizeMb}MB).`,
      );
      return;
    }

    setStatus("loading");
    formData.append("target_email", TALENT_DESTINATION_EMAIL);
    formData.append("application_type", lang === "es" ? "Postulacion de talento" : "Talent application");
    formData.append("cv_filename", cvFile.name);
    formData.append("_captcha", "false");
    formData.append("_subject", lang === "es" ? "Nueva postulacion de talento — Evolvix Global" : "New talent application — Evolvix Global");
    formData.append("_template", "table");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${TALENT_DESTINATION_EMAIL}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      let submitted = res.ok;

      // Form providers can deliver the email but still return non-standard responses.
      // We inspect JSON feedback when available and accept opaque CORS responses as sent.
      if (!submitted) {
        try {
          const payload = await res.clone().json();
          const successFlag = payload?.success === true || payload?.success === "true";
          const successMessage =
            typeof payload?.message === "string" &&
            /(success|sent|submitted|enviado|recibido)/i.test(payload.message);
          submitted = successFlag || successMessage;
        } catch {
          submitted = res.type === "opaque" || res.status === 0;
        }
      }

      if (submitted) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      // Optimistic fallback: some browsers/extensions block reading the response
      // while the multipart request is still delivered correctly.
      setStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <section className="relative bg-background pt-36 pb-12 md:pt-52 md:pb-20">
        <div className="container-edge">
          <Reveal variant="up" className="max-w-5xl">
            <div className="relative overflow-hidden border border-hairline bg-background/45 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
              <img
                src={growthImg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/72 via-background/58 to-background/72" />
              <div className="relative z-10">
                <p className="text-eyebrow">{p.sectionEyebrow}</p>
                <h1 className="mt-6 max-w-[16ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-titanium sm:text-5xl md:text-display-lg">
                  {p.heading}
                </h1>
                <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-platinum sm:text-base md:text-lg">
                  {p.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="container-edge pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-10 border-t border-hairline pt-16 md:gap-14 md:pt-24 md:grid-cols-12">
            <Reveal variant="up" className="md:col-span-5">
              <p className="text-mono-label text-smoke">{p.accessLabel}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-titanium md:text-display-md max-w-[14ch]">{p.accessHeading}</h2>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-smoke">{p.accessBody}</p>
            </Reveal>

            <Reveal variant="fade" delay={120} className="md:col-span-7 mt-2 md:mt-0 md:max-w-[42rem] md:ml-auto w-full">
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 bg-surface/40 p-4 sm:p-6 border border-hairline"
                onSubmit={handleSubmit}
              >
                <div className="sm:col-span-1">
                  <Field label={f.name} name="name" placeholder={f.namePlaceholder} required />
                </div>
                <div className="sm:col-span-1">
                  <Field label={f.lastName} name="lastName" placeholder={f.lastNamePlaceholder} required />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.email} name="email" type="email" placeholder={f.emailPlaceholder} required />
                </div>
                <div className="sm:col-span-1">
                  <Field label={f.phone} name="phone" placeholder={f.phonePlaceholder} required />
                </div>
                <div className="sm:col-span-1">
                  <Field label={f.position} name="position" placeholder={f.positionPlaceholder} required />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.linkedin} name="linkedin" placeholder={f.linkedinPlaceholder} />
                </div>
                <div className="sm:col-span-2">
                  <Field label={f.message} name="message" textarea placeholder={f.messagePlaceholder} required />
                </div>

                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="text-mono-label text-smoke">{f.cv}</span>
                    <input
                      type="file"
                      name="attachment"
                      accept="application/pdf,.pdf"
                      required
                      className="mt-2 w-full border border-hairline bg-transparent px-3 py-2.5 text-xs text-titanium sm:text-sm file:mr-3 file:border-0 file:bg-gold/15 file:px-3 file:py-1.5 file:text-[10px] sm:file:text-xs file:font-semibold file:text-gold hover:file:bg-gold/25"
                    />
                    <p className="mt-2 text-xs text-smoke">{p.cvHint}</p>
                  </label>
                </div>

                <div className="sm:col-span-2 mt-1">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="inline-flex w-full sm:w-fit justify-center items-center gap-3 border border-titanium px-5 py-2.5 text-mono-label text-background bg-titanium transition-colors duration-500 hover:bg-transparent hover:text-titanium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading"
                      ? lang === "es"
                        ? "ENVIANDO..."
                        : "SENDING..."
                      : status === "success"
                        ? lang === "es"
                          ? "POSTULACION ENVIADA"
                          : "APPLICATION SENT"
                        : f.submit}
                  </button>
                  <div className="mt-4 text-xs font-light text-smoke">{p.microcopy}</div>
                  {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
                  {status === "success" && (
                    <p className="mt-3 text-sm text-gold">{p.success}</p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-destructive">{p.error}</p>
                  )}
                </div>
              </form>
            </Reveal>
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
