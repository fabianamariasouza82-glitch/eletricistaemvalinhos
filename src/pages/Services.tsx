import { useState } from "react";
import { Phone, CheckCircle, Zap, Menu, X, Star } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  useSEO({
    title: "Serviços Elétricos em Campinas - Instalação e Manutenção | Eletricista em Campinas",
    description: "Conheça todos os serviços elétricos que oferecemos em Campinas: instalações, manutenção, quadro elétrico, iluminação, reformas e atendimento emergencial 24h.",
  });

  const services = [
    {
      category: "Instalações Elétricas",
      items: [
        "Instalação de tomadas elétricas",
        "Instalação de interruptores",
        "Instalação de luminárias e spots",
        "Instalação de ventiladores de teto",
        "Instalação de chuveiro elétrico",
        "Instalação de aquecedor de água",
        "Instalação de ar condicionado",
        "Instalação de geladeira e eletrodomésticos",
        "Instalação de forno elétrico",
        "Instalação de fogão elétrico",
        "Instalação de micro-ondas",
        "Instalação de máquina de lavar",
        "Instalação de secadora",
        "Instalação de lava-louças",
        "Instalação de TV e home theater",
        "Instalação de câmeras de segurança",
        "Instalação de campainha eletrônica",
        "Instalação de fechadura eletrônica",
        "Instalação de portão automático",
        "Instalação de bomba de água",
      ]
    },
    {
      category: "Manutenção e Reparo",
      items: [
        "Manutenção preventiva de instalação elétrica",
        "Reparo de tomadas com mau funcionamento",
        "Reparo de interruptores queimados",
        "Reparo de luminárias com defeito",
        "Reparo de chuveiro elétrico",
        "Reparo de ventilador de teto",
        "Reparo de eletrodomésticos",
        "Reparo de ar condicionado",
        "Reparo de TV e home theater",
        "Reparo de câmeras de segurança",
        "Reparo de portão automático",
        "Reparo de bomba de água",
        "Reparo de aquecedor de água",
        "Limpeza de contatos elétricos",
        "Verificação de fiação danificada",
      ]
    },
    {
      category: "Quadro Elétrico e Disjuntores",
      items: [
        "Troca de disjuntor",
        "Instalação de novo disjuntor",
        "Manutenção de quadro de força",
        "Instalação de DR (Disjuntor Diferencial Residual)",
        "Troca de chave geral",
        "Instalação de quadro de distribuição",
        "Ampliação de circuitos",
        "Balanceamento de fases",
        "Instalação de protetor de surto",
      ]
    },
    {
      category: "Iluminação",
      items: [
        "Instalação de iluminação LED",
        "Troca de lâmpadas",
        "Instalação de spots embutidos",
        "Instalação de arandelas",
        "Instalação de luminárias decorativas",
        "Instalação de iluminação externa",
        "Instalação de iluminação de emergência",
        "Instalação de sensor de movimento",
        "Instalação de lâmpada inteligente",
        "Projeto de iluminação residencial",
      ]
    },
    {
      category: "Reforma e Ampliação",
      items: [
        "Reforma elétrica completa",
        "Ampliação de circuitos elétricos",
        "Refiação de imóvel",
        "Instalação de nova carga",
        "Aumento de potência",
        "Mudança de localização de tomadas",
        "Mudança de localização de interruptores",
        "Projeto elétrico residencial",
        "Projeto elétrico comercial",
      ]
    },
    {
      category: "Segurança Elétrica",
      items: [
        "Instalação de aterramento",
        "Teste de isolamento",
        "Teste de continuidade",
        "Verificação de vazamento de corrente",
        "Instalação de protetor de surto",
        "Inspeção de segurança elétrica",
        "Certificação de conformidade",
        "Adequação às normas NBR",
      ]
    },
    {
      category: "Atendimento Emergencial",
      items: [
        "Reparo de curto-circuito",
        "Reparo de disjuntor que desarma",
        "Reparo de falta de energia",
        "Reparo de queimação de tomadas",
        "Reparo de queimação de interruptores",
        "Reparo de fios expostos",
        "Reparo de vazamento de corrente",
        "Atendimento 24 horas",
      ]
    },
    {
      category: "Comercial e Industrial",
      items: [
        "Instalação elétrica comercial",
        "Instalação elétrica industrial",
        "Manutenção de painéis elétricos",
        "Instalação de transformador",
        "Instalação de gerador",
        "Instalação de nobreak",
        "Instalação de sistema de energia solar",
        "Manutenção preventiva industrial",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-40">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/manus-storage/logo_eletricista_280fb94a.png" 
              alt="Eletricista em Campinas" 
              className="h-36 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Início</Link>
            <span className="text-lg font-medium text-accent">Serviços</span>
            <Link href="/blog" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Blog</Link>
            <a href="/#contato" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Contato</a>
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
            <Link href="/" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground border-b border-border">Início</Link>
            <span className="px-6 py-4 text-lg font-medium text-accent border-b border-border">Serviços</span>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground border-b border-border">Blog</Link>
            <a href="/#contato" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground">Contato</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de instalação e manutenção elétrica para residências, comércios e indústrias
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-12">
            {services.map((serviceGroup, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-accent" />
                  {serviceGroup.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Não encontrou o serviço que procura?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco. Oferecemos soluções personalizadas para qualquer necessidade elétrica.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Solicitar Orçamento
          </a>
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
          <div className="border-t border-blue-800 pt-8 flex flex-col items-center gap-4 text-center text-blue-200 text-sm">
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
