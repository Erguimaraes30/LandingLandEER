import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Facebook,
  FileText,
  Gauge,
  Github,
  Globe2,
  Instagram,
  LayoutDashboard,
  Mail,
  Megaphone,
  MousePointerClick,
  Palette,
  Rocket,
  Send,
  Smartphone,
  Store,
  Target,
  TimerReset,
  WandSparkles,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon.jsx';

export const socialLinks = [
  { label: 'E-mail', href: 'mailto:contato.landeer@gmail.com', icon: Mail },
  { label: 'Instagram', href: 'https://www.instagram.com/landeer_oficial/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591547630045&sk=directory_links', icon: Facebook },
  { label: 'WhatsApp', href: 'https://wa.me/5521920054352', icon: WhatsAppIcon },
  { label: 'GitHub', href: 'https://github.com/LandEER-Projects', icon: Github },
];

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
];

export const problemCards = [
  { title: 'Pouca conversão', icon: TimerReset, text: 'Visitantes chegam, navegam e saem sem entender o próximo passo.' },
  { title: 'Visual pouco profissional', icon: Palette, text: 'A primeira impressão não transmite confiança suficiente para vender.' },
  { title: 'Página lenta', icon: Gauge, text: 'Carregamento pesado derruba campanhas e aumenta abandono no mobile.' },
  { title: 'Falta de clareza na oferta', icon: Target, text: 'A promessa, os benefícios e a chamada para ação ficam soltos.' },
];

export const solutionCards = [
  { title: 'Layout responsivo', icon: Smartphone },
  { title: 'Copy focada em conversão', icon: FileText },
  { title: 'Performance otimizada', icon: Zap },
  { title: 'Integração com WhatsApp e redes sociais', icon: WhatsAppIcon },
  { title: 'Estrutura pronta para tráfego pago', icon: Megaphone },
  { title: 'Código moderno em React', icon: Code2 },
];

export const services = [
  { title: 'Landing page institucional', icon: Globe2, text: 'Apresente marca, serviços e diferenciais com uma página clara e elegante.' },
  { title: 'Página de captura de leads', icon: MousePointerClick, text: 'Estrutura direta para captar contatos e acelerar relacionamento.' },
  { title: 'Página para anúncios pagos', icon: Megaphone, text: 'Página alinhada à campanha, oferta e comportamento do público.' },
  { title: 'Página para lançamento', icon: Rocket, text: 'Narrativa visual para aquecer audiência e direcionar conversões.' },
  { title: 'Página para portfólio profissional', icon: BriefcaseBusiness, text: 'Mostre projetos, autoridade e caminhos de contato sem atrito.' },
  { title: 'Página para negócio local', icon: Store, text: 'Transforme buscas e cliques em conversas pelo WhatsApp.' },
];

export const processSteps = [
  { title: 'Briefing', icon: Send, text: 'Entendimento do objetivo, público, oferta, referências e prioridades.' },
  { title: 'Estratégia', icon: Target, text: 'Organização da narrativa, seções, CTAs e argumentos de venda.' },
  { title: 'Desenvolvimento', icon: LayoutDashboard, text: 'Criação responsiva em React, com performance e acabamento visual.' },
  { title: 'Entrega', icon: BadgeCheck, text: 'Revisão final, ajustes e página pronta para publicação.' },
];

export const portfolioItems = [
  { title: 'Landing page para consultoria', tag: 'B2B', text: 'Página enxuta para posicionar autoridade, explicar serviços e gerar conversas qualificadas.' },
  { title: 'Página de captura para infoproduto', tag: 'Leads', text: 'Estrutura focada em promessa, benefícios e formulário para construção de lista.' },
  { title: 'Página comercial para negócio local', tag: 'WhatsApp', text: 'Experiência mobile-first com prova visual, oferta clara e contato imediato.' },
];

export const whatsappBase = 'https://wa.me/5521920054352';
export const emailAddress = 'contato.landeer@gmail.com';

export const plans = [
  {
    id: 'simples',
    name: 'Simples',
    price: 239.99,
    deadlines: { normal: '2 dias', urgente: '1 dia' },
    description: 'Essencial para validar uma oferta com presença profissional.',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    price: 359.99,
    deadlines: { normal: '4 dias', urgente: '2 dias' },
    description: 'Mais estratégia, seções e acabamento para campanhas.',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 479.99,
    deadlines: { normal: '7 dias', urgente: '4 dias' },
    description: 'Experiência completa para lançamentos e páginas robustas.',
  },
];

export const decorativeIcons = [WandSparkles, Code2, Rocket];
