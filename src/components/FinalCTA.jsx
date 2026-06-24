import { Mail } from 'lucide-react';
import { emailAddress, whatsappBase } from '../data.js';
import { WhatsAppIcon } from '../icons/WhatsAppIcon.jsx';

export function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-night py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,61,255,0.22),transparent_32%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-5xl">
          Pronto para tirar sua landing page do papel?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-landeer-text">
          Vamos criar uma página rápida, bonita e pensada para converter.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-landeer-gradient px-6 py-3 text-sm font-bold text-white shadow-neon transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
          >
            <WhatsAppIcon size={18} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:border-landeer-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
          >
            <Mail size={18} aria-hidden="true" />
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
