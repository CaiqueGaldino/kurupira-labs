# Kurupira Labs

Site institucional da Kurupira Labs, desenvolvedora de aplicativos mobile.

## 🚀 Projetos

- **Farol Capital** - Aplicativo de gestão financeira pessoal 100% offline

## 🌐 Páginas Disponíveis

- `/` - Página inicial
- `/farolcapitalapp-ads` - Informações do app-ads.txt para Google AdMob
- `/politicasdeprivacidadesfarolcapital` - Política de privacidade do Farol Capital

## 🛠️ Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Barlow Condensed (fonte)

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Abrir no navegador
http://localhost:3000
```

## 📦 Build para Produção

```bash
# Gerar build estático
npm run build

# A pasta 'out' será criada com os arquivos estáticos
```

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Passo a passo:

1. **Configure o repositório no GitHub**
2. **Ative o GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"
3. **Faça push para a branch main**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```
4. **O workflow executará automaticamente**
5. **Seu site estará disponível em**: `https://[seu-usuario].github.io/[nome-do-repo]`

Para mais detalhes, consulte o arquivo [DEPLOY.md](DEPLOY.md)

## 📱 App-Ads.txt

O arquivo `app-ads.txt` está disponível em:
- `/public/app-ads.txt` (download direto)
- `/farolcapitalapp-ads` (página com instruções)

**Importante**: Substitua `pub-0000000000000000` pelo seu Publisher ID real do Google AdMob.

## 🎨 Cores do Site

- **Primárias**: Preto e Vermelho
- **Farol Capital**: Preto e Verde

## 📄 Licença

© 2025 Kurupira Labs. Todos os direitos reservados.
