import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center bg-background">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Página não encontrada.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
