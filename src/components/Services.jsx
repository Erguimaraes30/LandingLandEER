import { services } from '../data.js';
import { Card } from './Card.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function Services() {
  return (
    <section id="servicos" className="bg-night py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Serviços para cada momento da sua oferta."
          text="Da primeira versão de uma página até campanhas mais robustas, cada entrega é pensada para clareza, velocidade e conversão."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <Card key={title}>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-landeer-cyan/20 bg-landeer-cyan/10 text-landeer-cyan">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-landeer-cyan/30 to-transparent" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-landeer-text">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
