# Kurupira Labs - GitHub Pages Deployment

Este site está configurado para ser implantado no GitHub Pages.

## Como fazer o deploy

1. **Commit suas alterações**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Configurar GitHub Pages**:
   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione "GitHub Actions"
   - O workflow será executado automaticamente

3. **Acessar o site**:
   - Após o deploy, seu site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repo]`

## Arquivos importantes

- `/farolcapitalapp-ads` - Página com informações do app-ads.txt
- `/politicasdeprivacidadesfarolcapital` - Política de privacidade do Farol Capital
- `/public/app-ads.txt` - Arquivo app-ads.txt acessível diretamente

## Configurações

O `next.config.ts` está configurado com:
- `output: 'export'` - Para gerar site estático
- `images: { unoptimized: true }` - Para imagens funcionarem no GitHub Pages
- `trailingSlash: true` - Para URLs funcionarem corretamente

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`
