import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../data.js';
import { Card } from './Card.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Portfólio enxuto, com foco em resultado."
          text="Exemplos fictícios do tipo de estrutura que a LandEER pode desenhar para diferentes objetivos de venda."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="min-h-72">
              <div className="mb-8 h-36 overflow-hidden rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(0,212,255,0.32),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(168,85,255,0.28),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025))]">
                <div className="h-full w-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_48%,transparent_60%)] opacity-45" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-[8px] border border-landeer-cyan/25 bg-landeer-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-landeer-cyan">
                  {item.tag}
                </span>
                <ArrowUpRight className="text-landeer-text transition group-hover:text-landeer-cyan" size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-landeer-text">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
