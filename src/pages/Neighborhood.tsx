import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Star } from "lucide-react";
import { neighborhoods } from "@/lib/data";
import { useSEO } from "@/hooks/useSEO";

export default function Neighborhood() {
  const [match, params] = useRoute("/bairro/:id");
  
  const neighborhood = neighborhoods.find(n => n.id === params?.id);

  // Gera um parágrafo extra com foco no tipo de região (residencial, comercial, universitária, industrial, condomínio)
  // para diferenciar de verdade o conteúdo de cada página de bairro, evitando texto duplicado.
  const getSpecialtyText = (description: string, name: string) => {
    const d = description.toLowerCase();
    if (d.includes("universitária") || d.includes("apartamentos") || d.includes("estudantes")) {
      return `Em ${name}, atendemos muito kitnets, apartamentos e repúblicas estudantis — sabemos lidar com instalações elétricas de prédios, quadros de distribuição compartilhados e a urgência de quem precisa resolver o problema rápido para voltar aos estudos ou ao trabalho.`;
    }
    if (d.includes("industrial") || d.includes("indústrias")) {
      return `Em ${name}, temos experiência com instalações elétricas de maior porte: quadros de força industriais, manutenção preventiva de painéis elétricos e adequação às normas de segurança do trabalho exigidas em ambientes comerciais e industriais.`;
    }
    if (d.includes("comercial") || d.includes("comércios") || d.includes("estabelecimentos")) {
      return `Em ${name}, atendemos lojas, escritórios e estabelecimentos comerciais com agilidade — sabemos que parar o funcionamento do seu negócio por um problema elétrico custa caro, por isso priorizamos atendimentos comerciais na região.`;
    }
    if (d.includes("condomínio") || d.includes("condomínios")) {
      return `Em ${name}, temos experiência atendendo condomínios — desde a manutenção elétrica de áreas comuns até instalações dentro das unidades, sempre seguindo as normas de segurança exigidas em edificações coletivas.`;
    }
    return `Em ${name}, atendemos residências de todos os portes — de reparos simples como troca de tomadas e chuveiros a reformas elétricas completas, sempre com atendimento rápido para quem mora na região.`;
  };

  const specialtyText = neighborhood ? getSpecialtyText(neighborhood.description, neighborhood.name) : "";

  useSEO({
    title: neighborhood
      ? `Eletricista no ${neighborhood.name} - Campinas | Atendimento 24 Horas`
      : "Eletricista em Campinas",
    description: neighborhood
      ? `Precisa de um eletricista no ${neighborhood.name}, Campinas? Atendimento rápido, certificado NR10 e NR35, 24 horas. ${neighborhood.description}`
      : "Eletricista profissional em Campinas.",
    jsonLd: neighborhood ? {
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": `Eletricista em Campinas - Atendimento no ${neighborhood.name}`,
      "image": "https://eletricistaemcampinas.com.br/manus-storage/hero_eletricista_8af14beb.jpg",
      "url": `https://eletricistaemcampinas.com.br/bairro/${neighborhood.id}`,
      "telephone": "+5519994252525",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Campinas",
        "addressRegion": "SP",
        "addressCountry": "BR",
      },
      "hasMap": `https://www.google.com/maps/search/eletricista+${encodeURIComponent(neighborhood.name)}+campinas`,
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": neighborhood.name,
      },
      "serviceType": [
        "Troca de Chuveiro",
        "Manutenção de Tomadas",
        "Troca de Disjuntor",
        "Instalações Elétricas",
        "Reparos Elétricos",
        "Emergências Elétricas 24h",
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
      "description": `Eletricista profissional atendendo o bairro ${neighborhood.name} em Campinas, com mais de 20 anos de experiência. ${neighborhood.description}`,
    } : undefined,
  });

  if (!match) return null;
  
  if (!neighborhood) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Bairro não encontrado</h1>
          <a href="/" className="text-accent hover:text-accent/80">Voltar para home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-40">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/manus-storage/logo_eletricista_280fb94a.png" 
              alt="Eletricista em Campinas" 
              className="h-36 w-auto"
            />
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">(19) 99425-2525</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold">Serviços em {neighborhood.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eletricista em {neighborhood.name}
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            Serviços elétricos profissionais em {neighborhood.name}, Campinas. Atendimento 24 horas com técnicos certificados.
          </p>
          <a 
            href={`https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20em%20${neighborhood.name}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Eletricista Profissional em {neighborhood.name}
            </h2>
            <p className="text-muted-foreground mb-4">
              Você está em {neighborhood.name} e precisa de um eletricista? {neighborhood.description}. Estamos aqui para atender você com rapidez e profissionalismo. Nossos técnicos certificados estão disponíveis 24 horas para resolver qualquer problema elétrico.
            </p>
            <p className="text-muted-foreground mb-4">
              {specialtyText}
            </p>
            <p className="text-muted-foreground mb-6">
              Atendemos {neighborhood.name} com rapidez e eficiência. Todos os nossos eletricistas são certificados em NR10 e NR35, garantindo segurança e qualidade em cada serviço. Você recebe orçamento detalhado, nota fiscal e garantia em todos os trabalhos realizados.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">Serviços Disponíveis em {neighborhood.name}</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Chuveiro não aquece? Trocamos a resistência com segurança</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Tomadas queimadas ou falta de tomadas? Resolvemos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Disjuntor desarmando? Diagnosticamos e resolvemos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Problemas elétricos frequentes? Fazemos manutenção completa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Emergência elétrica? Atendemos 24 horas em {neighborhood.name}</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">Por Que Nos Escolher?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">✓ Certificados NR10 e NR35 - Garantia de segurança</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">✓ Atendimento rápido - Resolvemos no mesmo dia</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">✓ Nota fiscal e garantia em todos os trabalhos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">✓ Preço justo - Orçamento sem surpresas</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Precisa de um Eletricista em {neighborhood.name}?</h3>
            <p className="text-blue-100 mb-6">Chame agora! Atendimento imediato, profissional e seguro.</p>
            <a 
              href={`https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20em%20${neighborhood.name}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
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
              <p className="text-blue-200 text-sm">{neighborhood.name}, Campinas</p>
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
