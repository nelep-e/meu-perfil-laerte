# Felipe Campos de Souza Gama — Página de Apresentação

Página pessoal / portfólio de **Felipe Campos de Souza Gama**, desenvolvedor full-stack.
Site estático (HTML + CSS + JavaScript puro), sem dependências e sem etapa de build.

## ✨ Recursos
- Design moderno, dark theme com gradientes e fundo animado
- Totalmente responsivo (desktop, tablet e mobile com menu hambúrguer)
- Efeito de digitação, animações ao rolar e microinterações
- Seções: Sobre, Experiência & Formação, Skills, Projetos e Contato

## 📁 Estrutura
```
index.html     → estrutura e conteúdo
style.css      → estilos e responsividade
script.js      → interações (typing, menu, scroll reveal)
render.yaml    → blueprint de deploy no Render
```

## ▶️ Rodar localmente
Por ser estático, basta abrir o `index.html` no navegador.
Opcional, com um servidor local:
```bash
# Python
python -m http.server 5500
# ou Node
npx serve .
```
Depois acesse `http://localhost:5500`.

## 🚀 Deploy no Render
1. Faça push deste repositório para o GitHub.
2. No [Render](https://render.com): **New +** → **Blueprint**.
3. Conecte e selecione o repositório `meu-perfil-laerte`.
4. O Render lê o `render.yaml` e publica como **Static Site** automaticamente.

Ou manualmente: **New +** → **Static Site** → conecte o repo →
*Build Command*: vazio · *Publish Directory*: `.`

---
> Conteúdo de apresentação criado para fins de portfólio. Atualize textos,
> projetos e contato conforme necessário.
