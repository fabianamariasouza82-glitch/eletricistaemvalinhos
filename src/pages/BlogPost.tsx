import { useRoute } from "wouter";
import { Phone, Calendar, Tag, ArrowLeft, Star } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  
  const post = blogPosts.find(p => p.id === params?.id);

  useSEO({
    title: post
      ? `${post.title} | Blog Eletricista em Campinas`
      : "Blog | Eletricista em Campinas",
    description: post ? post.excerpt : "Blog sobre eletricidade residencial e comercial.",
  });

  if (!match) return null;
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Post não encontrado</h1>
          <Link href="/blog" className="text-accent hover:text-accent/80">Voltar para blog</Link>
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

      {/* Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
            </div>
          </header>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Precisa de Ajuda?</h3>
            <p className="text-blue-100 mb-6">Nossos especialistas estão prontos para ajudar com qualquer problema elétrico.</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5519994252525&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-blue-50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Outros Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow border border-border">
                <h3 className="font-bold text-foreground mb-2 hover:text-accent transition-colors">{relatedPost.title}</h3>
                <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
              </Link>
            ))}
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
