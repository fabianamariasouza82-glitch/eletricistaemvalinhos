# Eletricista em Campinas — projeto reconstruído

Este projeto foi remontado a partir dos arquivos que você exportou do Manus.
O export original trazia só as páginas (.tsx) e os dados — faltavam as peças
de configuração (package.json, Vite, Tailwind) e alguns componentes de apoio
(tema, tratamento de erro, página 404, botão/card). Eu completei tudo isso
para o projeto voltar a ser um site funcional.

## ⚠️ Antes de publicar

1. **Imagens**: o site referencia duas imagens que ficavam no armazenamento
   interno do Manus e não vieram no .zip. Coloquei placeholders temporários em
   `public/manus-storage/`. Troque pelos arquivos reais (mesmo nome):
   - `logo_eletricista_280fb94a.png`
   - `hero_eletricista_8af14beb.jpg`

2. Revise o número de WhatsApp e telefone, que estão fixos no código
   (`5519994252525`), caso precise trocar.

## Proteção leve contra cópia

Adicionei em `src/components/CopyProtection.tsx` e em `src/index.css`:
- Bloqueio do menu de clique direito
- Bloqueio de seleção de texto
- Bloqueio dos atalhos Ctrl/Cmd+C, Ctrl/Cmd+U, Ctrl/Cmd+S, F12 e Ctrl+Shift+I

**Isso é apenas um desestímulo** — qualquer pessoa com conhecimento técnico
consegue contornar (ex: desativando JavaScript no navegador ou usando o
"Exibir código-fonte"). Não existe proteção 100% eficaz para conteúdo
publicado na web. Se quiser remover essa proteção no futuro (por exemplo,
se atrapalhar algum visitante legítimo), basta apagar a linha
`<CopyProtection />` em `src/App.tsx`.

## Como colocar no ar (sem precisar do Manus pago)

**Opção recomendada — GitHub + Vercel/Netlify (100% grátis, com domínio próprio):**

1. Crie uma conta gratuita no [GitHub](https://github.com) e suba esta pasta
   como um novo repositório (pode arrastar os arquivos pela interface web, em
   "Add file → Upload files").
2. Crie uma conta gratuita na [Vercel](https://vercel.com) ou
   [Netlify](https://netlify.com) e conecte esse repositório do GitHub.
   A plataforma detecta automaticamente que é um projeto Vite e faz o build
   sozinha (comando `npm run build`, pasta de saída `dist`).
3. Depois do primeiro deploy, vá em "Domains"/"Domínios" do projeto e adicione
   seu domínio próprio. A plataforma mostra os registros DNS (geralmente um
   CNAME) que você precisa cadastrar no painel onde comprou o domínio
   (Registro.br, Hostinger, GoDaddy etc.). O certificado SSL é emitido
   automaticamente.

Isso substitui completamente a necessidade do plano pago do Manus.

**Alternativa — build local e hospedagem tradicional (cPanel/FTP):**

1. Instale o [Node.js](https://nodejs.org) (versão 18 ou mais recente).
2. Nesta pasta, rode no terminal:
   ```
   npm install
   npm run build
   ```
3. Isso gera uma pasta `dist/` com HTML/CSS/JS prontos. Envie o **conteúdo**
   dessa pasta via FTP/gerenciador de arquivos para a raiz (`public_html`) da
   sua hospedagem.
   
