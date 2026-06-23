import { problemCards } from '../data.js';
import { Card } from './Card.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function Problem() {
  return (
    <section className="relative bg-night py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sua página precisa fazer mais do que só existir."
          text="Uma landing page bem construída guia a atenção, elimina ruído e deixa claro por que o visitante deve agir agora."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map(({ title, text, icon: Icon }) => (
            <Card key={title}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-[8px] bg-white/[0.06] text-landeer-cyan">
                <Icon size={22} aria-hidden="true" />
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
