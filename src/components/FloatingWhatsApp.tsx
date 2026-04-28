export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl text-3xl"
      aria-label="Contact on WhatsApp"
    >
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white"></span>
      </span>

      {/* @ts-ignore */}
      <ion-icon name="logo-whatsapp"></ion-icon>
    </a>
  );
}
