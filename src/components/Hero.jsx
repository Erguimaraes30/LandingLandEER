import { ArrowRight, MessageCircle } from 'lucide-react';
import { whatsappBase } from '../data.js';

const heroMesh = `${import.meta.env.BASE_URL}assets/hero-neon-mesh.png`;

export function Hero() {
  return (
    <section id="inicio" className="relative isolate h-[175vh] bg-void">
      <span id="hero-revelado" className="absolute top-[72vh] h-px w-px overflow-hidden" aria-hidden="true" />
      <div className="sticky top-0 min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,255,0.26),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(168,85,255,0.22),transparent_26%),linear-gradient(180deg,#05060D_0%,#0D0F1A_100%)]" />
        <img
          src={heroMesh}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-10 right-[-28rem] -z-10 h-[82vh] w-[72rem] max-w-none object-cover mix-blend-screen sm:right-[-20rem] lg:right-[-9rem] xl:right-0"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-night to-transparent" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-landeer-purple/20 blur-[110px]" />

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-4">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Landing pages que transformam{' '}
              <span className="bg-landeer-gradient bg-clip-text text-transparent">visitantes em clientes.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-landeer-text sm:text-xl">
              Criação de páginas modernas, rápidas e estratégicas para freelancers, negócios locais, infoprodutos e
              empresas que querem vender mais online.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#orcamento"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-landeer-gradient px-6 py-3 text-sm font-bold text-white shadow-neon transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                Calcular orçamento
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappBase}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-landeer-cyan/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
