import { useState } from "react";
import { Phone, Calendar, Tag, Menu, X, Star } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  useSEO({
    title: "Blog de Eletricidade - Dicas e Informações | Eletricista em Campinas",
    description: "Dicas, tutoriais e informações sobre problemas elétricos comuns e como resolvê-los. Artigos escritos por eletricistas certificados em Campinas.",
  });

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
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#blog" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Blog</a>
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
            <a href="#blog" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-foreground">Blog</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog de Eletricidade
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Dicas, tutoriais e informações sobre problemas elétricos comuns e como resolvê-los
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="blog" className="py-20 scroll-mt-28">
        <div className="container max-w-4xl">
          <div className="divide-y divide-border">
            {blogPosts.map((post) => (
              <article key={post.id} className="py-8 first:pt-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-accent transition-colors">{post.title}</Link>
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-2">
                  Ler mais →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tem um Problema Elétrico?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não encontrou a resposta que procurava? Entre em contato com nossos especialistas para uma avaliação profissional.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Chamar no WhatsApp
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
