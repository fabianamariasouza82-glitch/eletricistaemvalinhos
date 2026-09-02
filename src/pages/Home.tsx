import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, CheckCircle, Zap, Shield, AlertCircle, Menu, X, Plus, Minus, Star } from "lucide-react";
import { Link } from "wouter";
import { neighborhoods, blogPosts } from "@/lib/data";
import { useSEO } from "@/hooks/useSEO";
import ElfsightWidget from "@/components/ElfsightWidget";

const faqs = [
  {
    question: "Quanto custa um eletricista em Campinas?",
    answer: "O valor varia de acordo com o tipo de serviço, a urgência e os materiais necessários. Fazemos uma avaliação e enviamos um orçamento detalhado antes de iniciar qualquer trabalho, sem compromisso.",
  },
  {
    question: "Vocês atendem emergências elétricas 24 horas em Campinas?",
    answer: "Sim, temos atendimento 24 horas, todos os dias da semana, para emergências como curto-circuito, falta de energia, disjuntor desarmando e outros problemas urgentes.",
  },
  {
    question: "Quais bairros de Campinas vocês atendem?",
    answer: "Atendemos toda a cidade de Campinas, incluindo Taquaral, Cambuí, Barão Geraldo, Centro, Sousas e mais de 30 outros bairros. Veja a lista completa mais abaixo nesta página.",
  },
  {
    question: "Os eletricistas são certificados?",
    answer: "Sim, toda a nossa equipe é certificada nas normas NR10 (segurança em instalações elétricas) e NR35 (trabalho em altura), garantindo um serviço seguro e dentro das normas técnicas.",
  },
  {
    question: "Vocês emitem nota fiscal e garantia?",
    answer: "Sim, todos os serviços realizados incluem nota fiscal e garantia, para sua segurança e tranquilidade.",
  },
  {
    question: "Quanto tempo leva para um eletricista chegar até mim?",
    answer: "Para atendimentos em Campinas, nosso tempo médio de chegada é rápido, e priorizamos ainda mais os chamados de emergência. O prazo exato depende do seu bairro e da disponibilidade no momento do chamado.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Eletricista em Campinas - Serviços 24 Horas | Profissional Certificado",
    description: "Eletricista profissional em Campinas com mais de 20 anos de experiência. Atendimento 24 horas para residências, comércios e condomínios. Certificado NR10 e NR35.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  });

  const services = [
    {
      title: "Troca de Chuveiro",
      description: "Instalação e manutenção de chuveiros elétricos com segurança garantida.",
      icon: Zap,
    },
    {
      title: "Manutenção de Tomadas",
      description: "Reparo e instalação de tomadas elétricas em residências e comércios.",
      icon: AlertCircle,
    },
    {
      title: "Troca de Disjuntor",
      description: "Substituição segura de disjuntores com certificação NR10.",
      icon: Shield,
    },
  ];

  const benefits = [
    { title: "20+ Anos de Experiência", icon: CheckCircle },
    { title: "Atendimento 24 Horas", icon: Clock },
    { title: "Certificado NR10 e NR35", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-40">
          <div className="flex items-center gap-2">
            <img 
              src="/manus-storage/logo_eletricista_280fb94a.png" 
              alt="Eletricista em Campinas" 
              className="h-36 w-auto"
              width={200}
              height={96}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#servicos" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Serviços</a>
            <a href="#sobre" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Sobre</a>
            <a href="#contato" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <a 
              href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">(19) 99425-2525</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
              className="md:hidden p-2 rounded-lg border border-border text-foreground"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden flex flex-col bg-white border-t border-border">
            <a href="/" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground border-b border-border">Home</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground border-b border-border">Serviços</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground border-b border-border">Sobre</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground">Contato</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] md:min-h-[780px] lg:min-h-[900px]">
        <div className="absolute inset-0">
          {/* Esta é a imagem de LCP (Largest Contentful Paint) da página —
              o maior elemento visível assim que ela carrega. Por isso
              carrega com prioridade alta (fetchPriority="high") e sem
              lazy loading, além de width/height explícitos para o
              navegador reservar o espaço corretamente antes de baixá-la. */}
          <img 
            src="/manus-storage/hero_eletricista_8af14beb.jpg" 
            alt="Eletricista profissional" 
            className="w-full h-full object-cover object-[center_15%] md:object-[75%_15%]"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
        </div>
        <div className="container relative py-20 md:py-40 lg:py-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Eletricista Profissional em Campinas
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Mais de 20 anos de experiência. Atendimento 24 horas para residências, comércios e condomínios. Certificado NR10 e NR35.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground">{benefit.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 scroll-mt-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades elétricas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href="/servicos" className="text-accent font-medium hover:text-accent/80 transition-colors">
                    Saiba mais →
                  </Link>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicos" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-blue-50 scroll-mt-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Somos uma empresa especializada em serviços elétricos residenciais, comerciais e industriais em Campinas. Com mais de 20 anos de experiência, realizamos mais de 2.500 atendimentos com foco em segurança, agilidade e preço justo.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa equipe é formada por eletricistas certificados na NR10, treinados para lidar com qualquer situação — de uma simples troca de tomada a uma reforma elétrica completa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Nota fiscal e garantia em todos os serviços</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Atendimento em todos os bairros de Campinas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Agendamento flexível para serviços programados</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">2.500+</div>
                  <p className="text-muted-foreground">Serviços realizados</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">20+</div>
                  <p className="text-muted-foreground">Anos de experiência</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">24/7</div>
                  <p className="text-muted-foreground">Atendimento emergencial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 scroll-mt-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de um Eletricista Agora?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para um orçamento. Atendimento rápido e profissional garantido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <a 
              href="tel:+5519994252525"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone className="w-5 h-5" />
              (19) 99425-2525
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de eletricista em Campinas
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Atendemos Todos os Bairros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre informações específicas sobre nossos serviços em seu bairro
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-3">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.id} href={`/bairro/${neighborhood.id}`} className="block text-center py-2 hover:text-accent transition-colors">
                <p className="font-medium text-foreground text-sm">{neighborhood.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Blog de Eletricidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dicas e informações sobre problemas elétricos comuns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block py-2 hover:opacity-80 transition-opacity">
                <p className="text-xs text-accent font-semibold mb-2">{post.category}</p>
                <h3 className="font-bold text-foreground mb-2 hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Ver Todos os Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Eletricista em Campinas</h3>
              <p className="text-blue-200 text-sm">Serviços elétricos profissionais com mais de 20 anos de experiência.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contato</h4>
              <p className="text-blue-200 text-sm mb-2">
                <a href="tel:+5519994252525" className="hover:text-white transition-colors">(19) 99425-2525</a>
              </p>
              <p className="text-blue-200 text-sm">Atendimento 24 horas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Localização</h4>
              <p className="text-blue-200 text-sm">Campinas, SP</p>
              <p className="text-blue-200 text-sm">Atendemos toda a região</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Certificações</h4>
              <p className="text-blue-200 text-sm mb-1">✓ NR10</p>
              <p className="text-blue-200 text-sm">✓ NR35</p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 flex flex-col items-center gap-6 text-center text-blue-200 text-sm">
            <div className="w-full max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-6">O que nossos clientes dizem</h3>
              <div className="bg-white rounded-xl p-6 md:p-8">
                <ElfsightWidget />
              </div>
            </div>
            <a
              href="https://g.page/r/CR9hqmiONmcMEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-white transition-colors"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Avalie-nos no Google
            </a>
            <p>&copy; 2026 Eletricista em Campinas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
