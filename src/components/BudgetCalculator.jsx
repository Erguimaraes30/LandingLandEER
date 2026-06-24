import { useState } from 'react';
import { Mail } from 'lucide-react';
import { emailAddress, plans, whatsappBase } from '../data.js';
import { WhatsAppIcon } from '../icons/WhatsAppIcon.jsx';
import { SectionHeader } from './SectionHeader.jsx';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function BudgetCalculator() {
  const [selectedPlan, setSelectedPlan] = useState('profissional');
  const [deadline, setDeadline] = useState('normal');

  const plan = plans.find((item) => item.id === selectedPlan) ?? plans[1];
  const formattedTotal = currency.format(plan.price);
  const deadlineLabel = deadline === 'normal' ? 'Normal' : 'Urgente';
  const deliveryTime = plan.deadlines[deadline];
  const message = [
    'Olá, LandEER! Quero solicitar um orçamento.',
    '',
    `Tipo: ${plan.name}`,
    `Prazo: ${deadlineLabel} (${deliveryTime})`,
    `Valor estimado: ${formattedTotal}`,
  ].join('\n');
  const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('Solicitação de proposta LandEER')}&body=${encodeURIComponent(message)}`;

  return (
    <section id="orcamento" className="relative overflow-hidden bg-night py-24 sm:py-28">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-landeer-purple/35 to-transparent" />
      <div className="absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-landeer-cyan/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Calcule uma estimativa para sua landing page."
          text="Escolha o tipo de projeto e o prazo ideal para ter uma noção rápida do investimento."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[8px] border border-white/10 bg-panel-gradient p-5 shadow-card backdrop-blur-xl sm:p-7">
            <fieldset>
              <legend className="font-display text-xl font-bold text-white">Tipo de landing page</legend>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {plans.map((item) => (
                  <label
                    key={item.id}
                    className={`cursor-pointer rounded-[8px] border p-4 transition ${
                      selectedPlan === item.id
                        ? 'border-landeer-cyan bg-landeer-cyan/10'
                        : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={item.id}
                      checked={selectedPlan === item.id}
                      onChange={(event) => setSelectedPlan(event.target.value)}
                      className="sr-only"
                    />
                    <span className="block font-display text-lg font-bold text-white">{item.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-landeer-cyan">{currency.format(item.price)}</span>
                    <span className="mt-3 block text-sm leading-6 text-landeer-text">{item.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-lg font-bold text-white">Prazo</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { id: 'normal', label: 'Normal', time: plan.deadlines.normal },
                  { id: 'urgente', label: 'Urgente', time: plan.deadlines.urgente },
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`cursor-pointer rounded-[8px] border p-4 transition ${
                      deadline === item.id
                        ? 'border-landeer-cyan bg-landeer-cyan/10'
                        : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="deadline"
                      value={item.id}
                      checked={deadline === item.id}
                      onChange={(event) => setDeadline(event.target.value)}
                      className="sr-only"
                    />
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="mt-1 block text-sm text-landeer-text">Entrega em {item.time}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <aside className="sticky top-28 h-fit rounded-[8px] border border-landeer-cyan/25 bg-[linear-gradient(145deg,rgba(123,61,255,0.18),rgba(0,212,255,0.08)),rgba(255,255,255,0.045)] p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-landeer-cyan">Valor estimado</p>
            <output className="mt-4 block bg-landeer-gradient bg-clip-text font-display text-5xl font-black text-transparent sm:text-6xl">
              {formattedTotal}
            </output>
            <p className="mt-5 text-sm leading-7 text-landeer-text">
              Prazo selecionado: <span className="font-semibold text-white">{deadlineLabel}</span>, com entrega em{' '}
              <span className="font-semibold text-white">{deliveryTime}</span>.
            </p>
            <p className="mt-3 text-sm leading-7 text-landeer-text">
              Valor estimado. O orçamento final pode variar conforme escopo e integrações.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-landeer-gradient px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                <WhatsAppIcon size={18} aria-hidden="true" />
                Enviar orçamento pelo WhatsApp
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-landeer-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                <Mail size={18} aria-hidden="true" />
                Solicitar proposta por e-mail
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
